const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;

  console.log("Form Data:", {
    name,
    email,
    message,
  });

  try {
    // Create email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_FROM,
        pass: process.env.PASS,
      },
    });

    // Email content
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

    res.status(200).send(`
      <h1>Thank you, ${name}!</h1>
      <p>Your message has been sent successfully.</p>
    `);

  } catch (error) {
    console.error("Email error:", error);

    res.status(500).send("Failed to send email.");
  }
});

app.listen(3000, () => {
  console.log("Server is running successfully on port 3000");
});