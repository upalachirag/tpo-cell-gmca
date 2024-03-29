const express = require("express");
const mysql = require('mysql');
const cors = require('cors');
const multer = require("multer");
const path = require("path");
const nodemailer = require('nodemailer');
const readXlsxFile = require('read-excel-file/node');
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bodyParser = require("body-parser");

const app = express();
app.use(cors(
    {
        origin:["http://localhost:3000"],
        methods:["POST", "GET", "DELETE", "PUT"],
        credentials: true
    }
));
app.use(express.json());
app.use(express.static('public'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(session({
    secret: 'gmca-tpo-cell',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    }
}))

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "tpocell"
});

app.post("/student/apply", (req, res) => {
    const sql = "INSERT INTO application (`company`,`job`,`name`,`enroll`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.title,
        req.body.sname,
        req.body.enroll
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return console.log(err);
        return res.json("Application Added Succesfully");
    })
})

app.get("/application",(req, res) => {
    const sql = "SELECT * FROM application";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.post("/student/select", (req, res) => {
    const sql = "INSERT INTO selected (`company`,`job`,`name`,`enroll`) VALUES (?)";
    const values = [
        req.body.company,
        req.body.job,
        req.body.name,
        req.body.enroll
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return console.log(err);
        return res.json("Application Added Succesfully");
    })
})

app.get("/selected",(req, res) => {
    const sql = "SELECT * FROM selected";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

//profile
app.post("/student/updateprofile", (req, res) => {
    
    const name = req.body.name;
    const email = req.body.email;
    const mobile = req.body.mobile;
    const skill = req.body.skill;
    const enroll = req.body.enroll;
    
    const sql = "UPDATE student SET name=?, email=?, mobile=?, skill=? WHERE enroll = ?";
    db.query(sql, [name,email,mobile,skill,enroll], (err, data) => {
        if (err) return console.log(err);
        return res.json(data);
    })
})

//placement
app.get("/student/placement",(req, res) => {
    const sql = "SELECT job.title,job.technology,job.salary,job.deadline,job.internship,company.name,company.image FROM job LEFT JOIN company ON company.id = job.company_id";

    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        // console.log(data);
        return res.json(data);
    })
})

//count
app.get("/job",(req, res) => {
    const sql = "SELECT COUNT(id) as count FROM job";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data[0].count);
    })
})

app.get("/stu",(req, res) => {
    const sql = "SELECT COUNT(id) as count FROM student";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data[0].count);
    })
})
app.get("/company",(req, res) => {
    const sql = "SELECT COUNT(id) as count FROM company";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data[0].count);
    })
})
app.get("/Sstu",(req, res) => {
    const sql = "SELECT COUNT(id) as count FROM selected";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data[0].count);
    })
})

//signup & signin
app.post("/signup", (req, res) => {
    // const name = req.body.values.name;
    // const enroll = req.body.values.enroll;
    // const email = req.body.values.email;
    // const password = req.body.values.password;
    const values = [
        req.body.name,
        req.body.enroll,
        req.body.email,
        req.body.password
    ]
    // console.log(values);
    const sql = "INSERT INTO sregistration (`name`,`enroll`,`email`,`password`) VALUES (?)";
    db.query(sql, [values], (err, data) => {
        if (err) return console.log(err);
        return res.json("User Added Succesfully");
    })
    // const sql2 = "SELECT * FROM student WHERE enroll = ?"

    // db.query(sql2,[enroll],(err,data)=>
    // {
    //     if(err) return res.json(err);
    //     if(data.legnth > 0){
    //         console.log(data);
    //     }else{
    //         console.log("no Data")
    //         return res.json({signup: false});
    //     }
    // })
})


app.get('/', (req, res) => {
    // console.log(req.session.username + " hello");
    if(req.session.username){
        return res.json({valid: true, username: req.session.username})
    } else {
        return res.json({valid: false})
    }
})

app.post("/enrolldata", (req, res) => {
    // console.log(req.body.enroll);
    const sql = "SELECT * FROM student WHERE enroll = ?";
    db.query(sql, [req.body.enroll], (err, data) => {
        if (err) return console.log(err);
        return res.json(data[0]);
    })
})

app.post("/admindata", (req, res) => {
    // console.log(req.body.enroll);
    const sql = "SELECT * FROM admin WHERE name = ?";
    db.query(sql, [req.body.name], (err, data) => {
        if (err) return console.log(err);
        return res.json(data[0]);
    })
})

app.post("/signin", (req, res) => {
    const sql = "SELECT * FROM sregistration WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return console.log(err);
        if (data.length > 0) {
            // const enroll = data[0].enroll;
            // const token = jwt.sign({enroll},"gmca-tpo-cell-jsonwebtoken-secret-key",{expiresIn:'1d'});
            // res.cookie('stoken',token);
            req.session.username = data[0].enroll;
            return res.json({ signin: true });
        } else {
            return res.json({ signin: false });
        }
    })

})

app.post("/asignin", (req, res) => {
    const sql = "SELECT * FROM admin WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if (err) return console.log(err);
        if (data.length > 0) {
            // const name = data[0].name;
            // const token = jwt.sign({name},"gmca-tpo-cell-jsonwebtoken-secret-key",{expiresIn:'1d'});
            // res.cookie('admintoken',token);
            req.session.username = data[0].name;
            return res.json({ signin: true });
        } else {
            return res.json({ signin: false });
        }
    })

})

app.get("/checkenroll", (req, res) => {
    const sql = "SELECT enroll FROM student";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

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

app.post("/StudentImage/:enroll", upload.single('image'), (req, res) => {
    const image = req.file.filename;
    const enroll = req.params.enroll;
    const sql = "UPDATE student SET `image`=? WHERE `enroll`=?";
    db.query(sql, [image, enroll], (err, data) => {
        if (err) return res.json(err);
        return res.json({ Status: "Success" });
    })
})

//Admin Management
app.post("/admin/AddAdmin", (req, res) => {
    console.log(req.body);
    const sql = "INSERT INTO admin (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if (err) return console.log(err);
        return res.json("Admin Added Succesfully");
    })
})

app.get("/admin/AdminManage", (req, res) => {
    const sql = "SELECT * FROM admin";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

app.delete("/AdminDelete/:id", (req, res) => {
    const sql = "DELETE FROM admin WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return res.json(err);
        return res.json("Admin Deleted Succesfully");
    })
})

app.post("/uploadAdminImage/:id", upload.single('image'), (req, res) => {
    const image = req.file.filename;
    const id = req.params.id;
    const sql = "UPDATE admin SET `image`=? WHERE `id`=?";
    db.query(sql, [image, id], (err, data) => {
        if (err) return res.json(err);
        return res.json({ Status: "Success" });
    })
})

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

//Notification
app.post("/admin/notification", (req, res) => {
    const sql = "INSERT INTO notification (`msg`) VALUES (?)";
    const msg = req.body.message
    db.query(sql, [msg], (err, data) => {
        if (err) return console.log(err);
        return res.json("Message Added Succesfully");
    })
})

app.delete("/admin/Dnotification/:id", (req, res) => {
    const sql = "DELETE FROM notification WHERE id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if (err) return console.log(err);
        return res.json("Message Deleted Succesfully");
    })
})

app.get("/admin/Rnotification", (req, res) => {
    const sql = "SELECT * FROM notification";
    db.query(sql, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    })
})

//email
app.post("/admin/email", (req, res) => {
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'cjupala0406@gmail.com',
            pass: 'hrkt udfv glhp ykoh'
        }
    });

    var mailOptions = {
        from: 'cjupala0406@gmail.com',
        to: `${email}`,
        subject: `${subject}`,
        text: `${message}`
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
            return res.json(info);
        }
    });
})


app.listen(8081, () => {
    console.log("listening");
})