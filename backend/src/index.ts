import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user";
dotenv.config();

const app: Express = express();
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI || "")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err: Error) => { 
    console.log(process.env.MONGO_URI)
    console.log(err);
  });

app.use(express.json());
app.use(cors());
app.use("/user", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});