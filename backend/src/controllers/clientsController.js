import { pool } from "../config/db.js";

export const getAllClients = async (req,res) => {
    try{
        const [rows] = await pool.query("SELECT * FROM clients");
        res.status(200).json(rows);
    } catch (error){
        res.status(500).json({ error: error.message });
    }
};

export const createClient = async (req, res) => {
    res.status(201).json({message: "Client created"});
};

export const updateClient = async (req, res) => {
    res.status(200).json({message: "Client updated"});
};

export const deleteClient = async (req, res) => {
    res.status(200).json({message: "Client deleted"});
};