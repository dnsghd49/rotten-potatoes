const users = require('express').Router();
const express = require('express')
const app = express();
const { pool } = require('.../dbConfig');
const bcrypt = require('bcrypt')

//Configuration / Middleware 
app.use(users.urlencoded({ extended: false}))


users.get("/", (req, res) => {
  res.send("./pages/main");
});

users.get("/", async (req, res) => {
    res.send("./Signup/sign-up");
});

users.get("/", async (req, res) => {
    res.send("./Signup/login");
});

users.get("/", async (req, res) => {
    res.send("./Signup/dashboard");
});

users.post("/", async (req, res) => {
    let {name, email, password, password2 } = req.body;
    console.log({
        name, 
        email,
        password,
        password2
    })

    let errors = [];

    if (!name || !email || !password || !password2){
        errors.push({ message: 'Please eneter all fields'})
    }
    if (password.length < 6){
        errors.push({ message: 'Password should be at least 6 characters'})
    }
    if (password !== password2){
        errors.push({ message: 'Passwords do not match'})
    }
    if(errors.length > 0){
        res.render('register', {errors});
    }else{
        let hashPassword = await bcrypt.hash(password, 10);
        console.log(hashPassword)
    }
});

users.put("/users/register/:id", async (req, res) => {
    res.send("")
});

users.delete("/users/dashboard/:id", async (req, res) => {
    res.send("")
});

module.exports = users;