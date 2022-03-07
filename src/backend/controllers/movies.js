const movies = require("express").Router();

movies.get("/", (req, res) => {
  res.send("/movies");
});

movies.get("/:id", async (req, res) => {});

movies.post("/", async (req, res) => {});

movies.put("/:id", async (req, res) => {});

movies.delete("/:id", async (req, res) => {});

module.exports = movies;
