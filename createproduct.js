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
  var sql = "CREATE TABLE product (productid varchar(10) primary key, productname varchar(50) not null, productdescription varchar(500), productcolor varchar(10), productbrand  varchar(100), productprice int check(productprice > 0), stock int check(stock > 0 or stock = 0))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
