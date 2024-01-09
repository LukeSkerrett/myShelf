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
app.get(`cron`, (req, res)=>{
    console.log('CRON JOB')
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
            console.log("logged in")
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

app.post('/getsneakers', (req, res) =>{

    const sql = "SELECT * FROM sneakers WHERE `username` = ?"
    db.query(sql, [req.body.username], (err, data) =>{
        if(err){
            return res.json("Error");
        }
        if(data.length > 0){
            return res.json(data);
        }
        else{
            return res.json("Empty")
        }
    })
})

app.post('/createsneaker', (req, res) => {
    const sql = "INSERT INTO sneakers (`username`, `name`, `colorway`, `year`) VALUES (?)"
    const values = [
        req.body.username,
        req.body.name,
        req.body.color,
        req.body.year
    ]
    db.query(sql, [values], (err,data) => {
        if (err){
            return res.json(err);
        }
        console.log("sneaker created")
        return res.json("created")
    })
})

app.delete('/delete/:id', (req, res) => {
    const sql = "DELETE FROM sneakers where id = ?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if(err) return res.json(err);
        return res.json("Deleted")
    })
})
app.listen(8081, () =>{
    console.log("listening");
})