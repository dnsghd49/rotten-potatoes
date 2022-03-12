const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

var corsOptions = {
  origin: "http://localhost:3001"
}

//MIDDLEWARE
app.use(cors(corsOptions));

// parse req of content-type
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");
db.sequelize.sync();
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Rotten Potatoes." });
});

require("./app/routes/user.routes")(app);

const port = process.env.PORT || 3000;

const publicPath = path.join(__dirname, "..", "public");

app.use(express.static(publicPath));
app.use(express.json());

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}!`);
});
