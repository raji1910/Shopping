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
  var sql = "create table feedback( customerphone varchar(10), productid varchar(10), review varchar(500), dateofreview datetime, foreign key(customerphone) references customer(customerphone), foreign key(productid) references product(productid))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});