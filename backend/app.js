const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();

// CORS
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://aman-wxd-byhp.onrender.com",
    ],
   
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Contact Form
app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Form Data:", {
    name,
    email,
    message,
  });

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASS,
      },
    });

    const mailOptions = {
      from: `"Aman WXD" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: "New Message from Portfolio",

      html: `
        <h2>New Form Submission</h2>

        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Message:</strong><br>
          ${message}
        </p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Your message has been sent successfully.",
    });
  } catch (error) {
    console.error("Email error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send email.",
    });
  }
});

// IMPORTANT: Render PORT
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});