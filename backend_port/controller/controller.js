const axios = require("axios");

const sendContactEmail = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required.",
      });
    }

    const emailData = {
      sender: {
        name: "Portfolio Contact Form",
        email: process.env.BREVO_SENDER_EMAIL,
      },

      to: [
        {
          email: process.env.RECEIVER_EMAIL,
          name: "Portfolio Owner",
        },
      ],

      replyTo: {
        email: email,
        name: name,
      },

      subject: `New Portfolio Contact - ${name}`,

      htmlContent: `
        <div style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: auto;
          padding: 20px;
          border: 1px solid #ddd;
          border-radius: 10px;
        ">

          <h2 style="color: #333;">
            New Contact Form Submission
          </h2>

          <hr />

          <p>
            <strong>Name:</strong> ${name}
          </p>

          <p>
            <strong>Email:</strong> ${email}
          </p>

          <p>
            <strong>Message:</strong>
          </p>

          <div style="
            background: #f5f5f5;
            padding: 15px;
            border-radius: 8px;
            white-space: pre-line;
          ">
            ${message}
          </div>

          <hr />

          <p style="color: #777; font-size: 12px;">
            This message was sent from your portfolio contact form.
          </p>

        </div>
      `,

      textContent: `
New Portfolio Contact

Name: ${name}
Email: ${email}

Message:
${message}
      `,
    };

    const response = await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      emailData,
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    console.log("Brevo response:", response.data);

    return res.status(200).json({
      success: true,
      message: "Message sent successfully!",
      messageId: response.data.messageId,
    });

  } catch (error) {
    console.error(
      "Brevo Email Error:",
      error.response?.data || error.message
    );

    return res.status(500).json({
      success: false,
      message: "Failed to send message.",
      error: error.response?.data || error.message,
    });
  }
};

module.exports = {
  sendContactEmail,
};