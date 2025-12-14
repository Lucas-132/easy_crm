import { getAllClients } from "../config/db";

export const getAllClients = async (req,res) => {
    const clients = await Client.findAll();
    res.json(clients);
};

export const createClient = (req, res) => {
    res.status(201).json({message: "Client created"});
};

export const updateClient = (req, res) => {
    res.status(200).json({message: "Client updated"});
};

export const deleteClient = (req, res) => {
    res.status(200).json({message: "Client deleted"});
};