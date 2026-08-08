const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const nodemailer = require("nodemailer");

dotenv.config();

const app = express();

// CORS — explicitly allow methods and headers to avoid preflight failures
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://aman-wxd-byhp.onrender.com/submit",
    ],
    methods: ["POST", "OPTIONS"],
    allowedHeaders: ["Content-Type"],
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// FIX: Create transporter once at startup, not on every request
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_FROM,
    pass: process.env.PASS,
  },
});

// FIX: Simple email format validator
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// FIX: Sanitize user input before injecting into HTML to prevent XSS
function sanitizeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");
}

// Contact Form
app.post("/submit", async (req, res) => {
  const { name, email, message } = req.body;

  // FIX: Validate that required fields are present and non-empty
  if (!name || !email || !message) {
    return res.status(400).json({
      success: false,
      message: "Name, email, and message are required.",
    });
  }

  // FIX: Validate email format before using it in replyTo
  if (!isValidEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Please provide a valid email address.",
    });
  }

  // FIX: Trim inputs to avoid whitespace-only submissions
  const safeName = sanitizeHtml(name.trim());
  const safeEmail = sanitizeHtml(email.trim());
  const safeMessage = sanitizeHtml(message.trim());

  if (!safeName || !safeMessage) {
    return res.status(400).json({
      success: false,
      message: "Name and message cannot be empty.",
    });
  }

  console.log("Form Data:", { name: safeName, email: safeEmail });

  try {
    const mailOptions = {
      from: `"Aman WXD" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email.trim(), // raw email (validated above), not sanitized for HTML
      subject: "New Message from Portfolio",
      html: `
        <h2>New Form Submission</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Message:</strong><br>${safeMessage}</p>
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
