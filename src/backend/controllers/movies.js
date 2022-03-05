const movies = require("express").Router();

movies.get("/", async (req, res) => {});

movies.get("/:id", async (req, res) => {});

movies.post("/", async (req, res) => {});

movies.put("/:id", async (req, res) => {});

movies.delete("/:id", async (req, res) => {});

module.exports = movies;
