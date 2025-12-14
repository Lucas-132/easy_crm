import express from "express";

const app = express();

app.get("/api/clients", (req, res) =>{
    res.status(200).send("you got 20 clients");
});

app.listen(5001, () => {
    console.log("Server launched successfully!");
});