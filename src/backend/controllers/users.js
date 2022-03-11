const users = require("express").Router();

users.get("/", (req, res) => {
  res.render("./pages/main");
});

users.get("/users/register", async (req, res) => {
    res.render("./pages/register");
});

users.get("/users/login", async (req, res) => {
    res.render("./pages/login");
});

users.get("/users/dashboard", async (req, res) => {
    res.render("./pages/dashboard");
});

users.post("users/", async (req, res) => {
    res.send("")
});

users.put("/users/register/:id", async (req, res) => {
    res.send("")
});

users.delete("/users/dashboard/:id", async (req, res) => {
    res.send("")
});

module.exports = users;