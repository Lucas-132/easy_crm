import mysql from "mysql2";

export const connectDB = async () => {
    const pool = mysql.createPool({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
    }).promise();

    async function getClientsData() {
        const result = await pool.query("SELECT * FROM clients");
        const rows = result[0];
        return rows;
    };

    const clients = await getClientsData();
    console.log(clients);
};