import express from "express";
import dotenv from "dotenv";
import githubRoutes from "./routes/githubRoutes.js";
import { connectDatabase } from "./config/database.js";
import session from "express-session";
import profileRoutes from "./routes/profileRoutes.js";
import jobRoutes from "./routes/jobRoutes.js";

dotenv.config();

const app = express();

//Middlewares
app.use(express.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
  })
);

//Routes 
app.use("/auth/github", githubRoutes);
app.use("/api/profile", profileRoutes);
app.use("/api/jobs", jobRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "SkillCompass API is running"
  });
});

const PORT = process.env.PORT || 5000;

await connectDatabase();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});