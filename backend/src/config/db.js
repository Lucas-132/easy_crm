import mysql from "mysql2";

  export const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();

export const testDBConnection = async () => {
  const poolForTest = mysql
    .createPool({
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
    })
    .promise();

  try{
    const test = await poolForTest.query("SELECT * FROM clients");
    console.log("Connected to db successfully!");
  } catch(error){
    console.log(error);
  }
};
