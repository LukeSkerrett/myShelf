const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "users"
})

app.post('/signup', (req, res) =>{
    const sql = "INSERT INTO signup (`name`,`email`,`password`) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password
    ]
    db.query(sql, [values], (err, data) => {
        if(err){
            console.log(err);
            return res.json("Error");
        }
        
        return res.json(data);
    })
})

app.post('/login', (req, res) =>{
    const sql = "SELECT * FROM signup WHERE `email` = ? AND `password` = ?";
    db.query(sql, [req.body.email, req.body.password], (err, data) => {
        if(err){
            console.log(err);
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Success")
        }
        else{
            return res.json("Fail")
        }
    })
})

app.post('/shelf', (req, res) =>{
    const sql = "SELECT * FROM signup WHERE `email` = ? ";
    db.query(sql, [req.body.email], (err, data) => {
        if(err){
            console.log(err);
            return res.json("Error");
        }
        if(data.length > 0){
            return data;
        }
        else{
            return res.json("Fail")
        }
    })
})

app.listen(8081, () =>{
    console.log("listening");
})