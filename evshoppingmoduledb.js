var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "11Rb==19"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE evshoppingmoduledb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});