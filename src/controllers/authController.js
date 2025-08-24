const authService = require('../services/authService');

async function register(req, res) {
  try {
    const { fullname, username, email, gender, phone, password } = req.body;

    await authService.registerUser({ fullname, username, email, gender, phone, password });

    res.status(201).json({ message: 'Registrasi berhasil' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function login(req, res) {
  try {
    const { email, password } = req.body;

    const { token, user } = await authService.loginUser(email, password);

    res.json({
      message: 'Login berhasil',
      token,
      user: { id_user: user.id_user, fullname: user.fullname, email: user.email }
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}

async function verifyEmail(req, res){
  try {
    const token = req.query.token;
    if (!token){
      return res.status(400).json({ message: 'Token verifikasi tidak ditemukan' });
    }
    await authService.verifyUserEmail(token);
    res.status(200).send("<h1>Email berhasil diverifikasi!</h1><p>Anda sekarang bisa login ke akun Anda.</p>");
  } catch (error){
    res.status(400).json({ message: error.message });
  }
}

async function resendVerificationEmail(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "Email Wajib Diisi." });
    }
    await authService.resendVerification(email);
    res.status(200).json({ message: "Email Verifikasi telah dikirim ulang. Silahkan periksa kembali kotak masuk anda." });
  } catch (error) {
    res.status(400).json({ message: error.message || "Terjadi kesalahan saat mengirim ulang email verifikasi." });
  }
}

module.exports = { register, login, verifyEmail, resendVerificationEmail };
