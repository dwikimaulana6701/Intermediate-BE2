const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { v4: uuidv4 } = require('uuid');
const authModel = require('../models/auth.model');
const { sendVerificationEmail } = require('./emailService');

const JWT_SECRET = process.env.JWT_SECRET;

async function registerUser(userData) {
  const {fullname, username, email, gender, phone, password} = userData;
  
  const existingUser = await authModel.findUserByEmail(email);
  if (existingUser) {
    throw new Error('Email sudah terdaftar');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const verificationToken = uuidv4();

  await authModel.createUser({ 
    fullname, username, email, gender, phone, 
    password: hashedPassword, 
    verificationToken 
  });
  
  await sendVerificationEmail(email, verificationToken);
}

async function loginUser(email, password) {
  const user = await authModel.findUserByEmail(email);

  if (!user || !(await bcrypt.compare(password, user.password))) {
    throw new Error('Email atau password yang dimasukkan salah.');
  }

  if (user.is_verified === 0) {
    throw new Error('Akun Anda belum diverifikasi. Silakan periksa email Anda.');
  }
  
  const token = jwt.sign(
    { id_user: user.id_user, email: user.email },
    JWT_SECRET,
    { expiresIn: '1h' }
  );
  
  return { token, user };
}

async function verifyUserEmail(token) {
  const user = await authModel.findUserByVerificationToken(token);

  if (!user) {
      throw new Error('Invalid Verification Token');
  }
  await authModel.updateUserVerificationStatus(user.id_user);
}

async function resendVerification(email) {
  const user = await authModel.findUserByEmail(email);

  if (!user) {
    throw new Error('User with this email does not exist.');
  }

  if (user.is_verified) {
    throw new Error('This account has already been verified.');
  }
  await sendVerificationEmail(user.email, user.verification_token);
}

module.exports = { 
  registerUser, 
  loginUser, 
  verifyUserEmail,
  resendVerification
};