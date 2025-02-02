import express from "express";
import {connectDb }from "./config/db.js"
import dotenv from "dotenv"
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js"
import cookieParser from "cookie-parser";
import cors from "cors"
import { app , server } from "./config/socket.js";

dotenv.config()



app.use(express.json({ limit: "50mb" }))
app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(cookieParser());
app.use(cors({
    origin: "http://famysas.netlify.app",
    credentials: true,
}))

app.use("/api/auth", authRoutes)
app.use("/api/messages", messageRoutes)


const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
    res.send("Server running successfully");
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    connectDb()
});