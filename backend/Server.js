const express = require("express");
const cors = require('cors');
const mysql = require('mysql');

const app = express();
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tpocell"
});

app.get("/student", (req, res) => {
    const sql = "SELECT * FROM demo";
    db.query(sql, (err, data) => {
        if(err) return res.json("Error...");
        return res.json(data);
    })
})

app.get("/api", (req, res) => {
    return res.json({message: "Hello I am chirag"});
});

app.listen(8081, () => {
    console.log("listening");
})