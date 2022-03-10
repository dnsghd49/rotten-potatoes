const users = require('express').Router();
const express = require('express')
const app = express();
const { pool } = require('.../dbConfig');

//Configuration / Middleware 
app.use(users.urlencoded({ extended: false}))


users.get("/", (req, res) => {
  res.render("./pages/main");
});

users.get("/users/sign-up", async (req, res) => {
    res.render("./Signup/sign-up");
});

users.get("/users/login", async (req, res) => {
    res.render("./Signup/login");
});

users.get("/users/dashboard", async (req, res) => {
    res.render("./Signup/dashboard");
});

users.post("users/sign-up", async (req, res) => {
    let {name, email, password, password2 } = req.body;
    console.log({
        name, 
        email,
        password,
        password2
    })
});

users.put("/users/register/:id", async (req, res) => {
    res.send("")
});

users.delete("/users/dashboard/:id", async (req, res) => {
    res.send("")
});

module.exports = users;