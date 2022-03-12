module.exports = app => {
    const users = require("../controllers/user.controller.js");
  
    var router = require("express").Router();
  
    // Create a new user
    router.post("/", users.create);
  
    // Retrieve all users
    router.get("/", users.findAll);
  
    // Retrieve all passwords for users
    router.get("/passwords", users.findAllPasswords);
  
    // Retrieve a single user with id
    router.get("/:id", users.findOne);
  
    // Update a user with id
    router.put("/:id", users.update);
  
    // Delete a user with id
    router.delete("/:id", users.delete);
  
    // Delete all users
    router.delete("/", users.deleteAll);
  
    app.use("/users", router);
  };