import express from "express";
import clientRoutes from "./routes/clientsRoutes.js";
import  { connectDB } from "./database.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use("/api/clients", clientRoutes);

connectDB();


app.listen(5001, () => {
    console.log("Server launched successfully!");
});