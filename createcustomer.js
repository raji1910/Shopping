var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "11Rb==19",
  database: "evshoppingmoduledb"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  /*Create a table named "customers":*/
  var sql = "create table customer( customername varchar(50) not null, customerphone varchar(10) primary key, customeraddress varchar(100) not null, customerpincode int(7) not null)";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});