const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const multer = require("multer");
const path = require("path");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tpocell"
});

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname+"_"+Date.now()+path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})

app.get("/jobmanage", (req, res) => {
    const sql = "SELECT * FROM job";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get("/admin/CompanyManage", (req, res) => {
    const sql = "SELECT * FROM company";
    db.query(sql, (err, data) => {
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.post("/upload", upload.single, (req, res) => {

})

app.post("/admin/AddCompany", (req, res) => {
    const sql = "INSERT INTO company (`name`,`description`,`technology`,`location`) VALUES (?)";
    const values = [
        req.body.Name,
        req.body.Description,
        req.body.Technology,
        req.body.Location
    ]
    db.query(sql, [values], (err, data) => {
        if(err) return res.json(err);
        return res.json("Company Added Succesfully");
    })
})

app.put("/admin/EditCompany/:id", (req, res) => {
    const sql = "UPDATE company SET `name` = ?,`description` = ?,`technology` = ?,`location` = ? WHERE id = ?";
    const id = req.params.id;
    const values = [
        req.body.Name,
        req.body.Description,
        req.body.Technology,
        req.body.Location
    ]
    db.query(sql, [...values, id], (err, data) => {
        if(err) return res.json(err);
        return res.json("Company Updated Succesfully");
    })
})

app.delete("/deleteCompany/:id", (req, res) => {
    const sql = "DELETE FROM company WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if(err) return res.json(err);
        return res.json("Company Deleted Succesfully");
    })
})

app.listen(8081, () => {
    console.log("listening");
})