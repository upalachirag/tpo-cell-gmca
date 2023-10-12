const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const multer = require("multer");
const path = require("path");
const readXlsxFile = require('read-excel-file/node');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tpocell"
});

//Company Photo
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + path.extname(file.originalname));
    }
})

const upload = multer({
    storage: storage
})


app.post("/uploadCompanyImage/:id", upload.single('image'), (req, res) => {
    const image = req.file.filename;
    const id = req.params.id;
    const sql = "UPDATE company SET `image`=? WHERE `id`=?";
    db.query(sql, [image, id], (err, data) => {
        if (err) return res.json(err);
        return res.json({ Status: "Success" });
    })
})

// app.get("/companyImage", (req, res) => {
//     const sql = "SELECT * FROM company";
//     db.query(sql, (err, data) => {
//         if(err) return res.json(err);
//         return res.json(data);
//     })
// })

//Excel File Upload
const excelstorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/excelFiles')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname)
    }
});

const excelupload = multer({ storage: excelstorage });

app.post("/excelupload", excelupload.single('excel'), (req, res) => {

    // console.log(req.file);
    // console.log(req.file.filename);

    readXlsxFile('public/excelFiles/' + req.file.filename).then((rows) => {

        // console.log(rows);

        rows.shift();

        const sql = "INSERT INTO student (`enroll`,`name`,`mobile`,`email`) VALUES ?";
        db.query(sql, [rows], (err, data) => {
            if (err) return console.log(err);
            return console.log("Excel Uploaded Successfully");
        })
    });
})

//Student List Retrive
app.get("/admin/StudentList", (req, res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})


//Job Managemant
app.get("/admin/JobManage", (req, res) => {
    const sql = "SELECT * FROM job";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.post("/admin/JobAdd", (req, res) => {
    const sql = "INSERT INTO job (`title`,`description`,`technology`,`salary`,`deadline`,`company_id`,`internship`) VALUES (?)";
    const values = [
        req.body.Title,
        req.body.Description,
        req.body.Technology,
        req.body.Salary,
        req.body.LastDate,
        req.body.CompanyId,
        req.body.Offer
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return console.log(err);
        return res.json("Job Added Succesfully");
    })
})

app.put("/admin/JobEdit/:id", (req, res) => {
    const id = req.params.id;
    const sql = "UPDATE job SET `title`=?,`description`=?,`technology`=?,`salary`=?,`deadline`=?,`company_id`=?,`internship`=? WHERE id=?";
    const values = [
        req.body.Title,
        req.body.Description,
        req.body.Technology,
        req.body.Salary,
        req.body.LastDate,
        req.body.CompanyId,
        req.body.Offer
    ]
    db.query(sql, [...values, id], (err, data) => {
        if (err) return console.log(err);
        return res.json("Job Updated Succesfully");
    })
})

app.delete("/JobDelete/:id", (req, res) => {
    const sql = "DELETE FROM job WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json("Job Deleted Succesfully");
    })
})

//Company Managemant
app.get("/admin/CompanyManage", (req, res) => {
    const sql = "SELECT * FROM company";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
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
        if (err) return res.json(err);
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
        if (err) return res.json(err);
        return res.json("Company Updated Succesfully");
    })
})

app.delete("/CompanyDelete/:id", (req, res) => {
    const sql = "DELETE FROM company WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return console.log(err);
        return res.json("Company Deleted Succesfully");
    })
})

app.listen(8081, () => {
    console.log("listening");
})