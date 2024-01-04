const express = require("express");
const mysql = require('mysql2');
const cors = require('cors');
require('dotenv').config()
const app = express();
app.use(cors());
app.use(express.json());
const db = mysql.createConnection(process.env.DATABASE_URL)

app.post('/checkexist', (req, res)=>{
    const sql = "SELECT * FROM users WHERE `username` = ?";
    db.query(sql, [req.body.username], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json("Exists");
        }
        return res.json("")
    })
})

app.post('/signup', (req, res) =>{
    const values = [
        req.body.username
    ]
    const insertSQL = "INSERT INTO users (`username`) VALUES (?)";
    db.query(insertSQL, [values], (err, data) => {
        if(err){
            console.log(err);
            return res.json("Error");
        }
        return res.json(data);
    })
})

app.post('/login', (req, res) =>{
    const sql = "SELECT * FROM users WHERE `username` = ?";
    db.query(sql, [req.body.username], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json(data);
        }
        else{
            return res.json("Fail")
        }
    })
})

app.post('/sneakershelf', (req, res) =>{
    const sql = "SELECT * FROM sneakers WHERE `id` = ? ";
    db.query(sql, [req.body.id], (err, data) => {
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json(data);
        }
        else{
            return res.json("No sneakers found, add to your shelf now!")
        }
    })
})


app.listen(8081, () =>{
    console.log("listening");
})