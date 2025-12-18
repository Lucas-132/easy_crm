import express from "express";
import clientRoutes from "./routes/clientsRoutes.js";
import { testDBConnection } from "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use("/api/clients", clientRoutes);

testDBConnection();


app.listen(5001, () => {
    console.log("Server launched successfully!");
});