const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "user",
  password: "password",
  database: "mentor"
});

connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => res.send("Hello World!"));

app.post("/login", (req, res) => {
  connection.query(
    {
      sql: "SELECT * FROM `users` WHERE `email` = ? AND `password` = ?",
      values: [req.body.email, req.body.password]
    },
    function(error, results, fields) {
      if (error) throw error;
      result = results[0];
      res.send({ id: result.id, name: result.name });
    }
  );
});

app.post("/register", (req, res) => {
  connection.query(
    {
      sql: "SELECT * FROM `users` WHERE `email` = ?",
      values: [req.body.email]
    },
    function(error, results, fields) {
      if (error) throw error;
      if (results.length > 0) {
        res.status(422);
        res.send({ error: "email exists" });
      } else {
        connection.query(
          {
            sql:
              "INSERT INTO `users` (email, password, name, created_at) VALUES (?, ?, ?, NOW())",
            values: [req.body.email, req.body.password, req.body.name]
          },
          function(error, results, fields) {
            if (error) throw error;
            res.status(201);
            res.send({ id: results.insertId, name: req.body.name });
          }
        );
      }
    }
  );
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
