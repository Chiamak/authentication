const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');

app.use(express.json());
app.use(cors());

app.listen(8000, ()=>{
    console.log('Running...');
})

// creating db 
const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    password: '',
    database: 'cofee'
})

app.post('/register', (req, res)=>{
    const semail = req.body.Email;
    const suser = req.body.Username;
    const spassword = req.body.Password;

    const SQL = 'INSERT INTO cofee_tba (email, username, password) VALUES (?, ?, ?)';
    const VALS = [semail, suser, spassword];

    db.query(SQL, VALS, (err, results)=>{
        if(err){
            res.send(err);
        }else{
            console.log('successful');
            res.send({message: 'Successfully registered new user!'});
        }
    })
})

app.post('/login', (req, res)=>{
    const usern = req.body.Username;
    const pword = req.body.Password;

    const seq = 'SELECT * FROM cofee_tba WHERE username =? && password =?';
    const vels = [usern, pword];
    db.query(seq, vels, (err, results)=>{
        if(err){
            res.send({error: err});
        }else if(results.length > 0){
            res.send(results);
        }else{
            res.send({message: 'Invalid username or password!'});
        }
    })

})