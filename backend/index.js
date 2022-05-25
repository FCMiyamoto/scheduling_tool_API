const express = require('express');
const router = express.Router();
const mysql = require("mysql");
const app = express();
const port = 3001;

const connection = mysql.createConnection({
    host: 'database',
    user: 'root',
    password: 'rootroot',
    database: 'my_db',
    // port: 3306
})

app.get('/', (req, res) => {
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