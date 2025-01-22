import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import emailRoutes from "./routes/emailRoutes.js";
import imageRoutes from "./routes/imageRoutes.js";
import connectDB from "./utils/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // Serve static files

// API Routes
app.use("/email", emailRoutes);
app.use("/image", imageRoutes);

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
  connectDB();
});
