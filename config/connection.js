var mysql = require("mysql2");

var connection = mysql.createConnection({
  host: "127.0.0.1",
  user: "root",
  password: "",
  database: "burgers_db"
});

connection.connect(function(err) {
  if (err) {
    console.log("error connecting:" + err.stack);
    return;
  }
  console.log("Connection.js connected");
});

module.exports = connection;
