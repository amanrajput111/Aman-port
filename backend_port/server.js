const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://aman005.onrender.com",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  })
);

app.use(express.json());

const contactRoutes = require("./routes/routes");

app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Portfolio backend is running",
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});