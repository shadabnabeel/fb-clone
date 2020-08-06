const express = require("express");
const mysql = require("mysql");

const PORT = 3000;

const DB = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "lkbbkl",
  port: 8000,
});

DB.connect((err, response) => {
  if (err) {
    console.log(err.message);
  } else {
    console.log("Connection Successfully");
  }
});

const app = express();

app.listen(PORT, () => {
  console.log(`Server Started ${PORT}`);
});

// app.get("", (req, res) => {
//   res.send("Hello From Express");
// });

app.get("createDb", (req, res) => {
  let sql = "CREATE DATABASE fb-clone";

  DB.query(sql, (err, result) => {
    if (err) {
      throw err;
    }
    res.send("created");
  });
});

app.post("/addPost", (req, res) => {
  console.log(req.body);
});

app.post("/deletePost");
