const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
    }
});

async function sendVerificationEmail(email, token) {
    const verificationUrl = `http://localhost:3000/auth/verify-email?token=${token}`;

    const mailOptions = {
        from: '"EduCourse App" <no-reply@educourse.com>',
        to: email,
        subject: 'Verifikasi Akun EduCourse Anda',
        html: `
            <h1>Selamat Datang di EduCourse!</h1>
            <p>Terima kasih telah mendaftar. Silakan klik link di bawah ini untuk memverifikasi alamat email Anda:</p>
            <a href="${verificationUrl}" style="background-color: #4CAF50; color: white; padding: 14px 25px; text-align: center; text-decoration: none; display: inline-block;">Verifikasi Email Saya</a>
            <p>Jika Anda tidak merasa mendaftar, abaikan email ini.</p>
        `
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log('Email verifikasi terkirim ke:', email);
    } catch (error) {
        console.error('Error mengirim email:', error);
    }
}

module.exports = { sendVerificationEmail };