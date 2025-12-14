import express from "express";
import clientRoutes from "./src/routes/clientsRoutes.js"

const app = express();

app.use("/api/clients", clientRoutes);




app.listen(5001, () => {
    console.log("Server launched successfully!");
});