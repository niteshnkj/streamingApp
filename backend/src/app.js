import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    Credentials: true,
  })
);

app.use(express.json({ limit: "16kb" })); //for local use
app.use(express.urlencoded({ extended: true, limit: "16kb" })); //for url

app.use(express.static("public"));

app.use(cookieParser());

export { app };
