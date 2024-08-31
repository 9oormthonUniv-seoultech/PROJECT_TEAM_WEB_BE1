const express = require('express');
const mysql = require('mysql2/promise');
const app = express();
const PORT = process.env.PORT;
require('dotenv').config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.use(express.json());

app.get('/', (req, res) => {
  res.json({message : "App is running on docker container"});
});

app.listen(PORT, () => {
  console.log(`App running on ${PORT}`);
});
