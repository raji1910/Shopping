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
  var sql = "create table categories(categoryid varchar(10) primary key,  categoryname varchar(50) not null,  productid varchar(10), categorydescription varchar(500), foreign key(productid) references product(productid))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});