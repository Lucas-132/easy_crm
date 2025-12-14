export const getAllClients = (req,res) => {
    res.status(200).send("You just fetched all clients.");
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