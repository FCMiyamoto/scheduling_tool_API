require('dotenv').config();

const express = require('express');
const mysql = require("mysql");
const app = express();
const port = 3001;
const my_env = process.env;

const connection = mysql.createConnection({
    host: my_env.MYSQL_HOST,
    user: my_env.MYSQL_USER,
    password: my_env.MYSQL_PASSWORD,
    database: my_env.MYSQL_DATABASE,
})

app.get('/', (req, res) => {
    console.log(my_env);
    console.log('hello');
    res.send("Hello World!");
});

app.get('/users', (req, res) => {
    const sql = 'select * from users';
    connection.query(sql, (error, results) => {
        if (error) {
            console.log(error);
        }
        console.log(results);
        res.json(results);
    })
})


app.listen(port, (req, res) => {
    console.log(`port is ${port}`);
})