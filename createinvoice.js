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
  var sql = "create table invoice(invoiceid varchar(10) primary key, customerphone varchar(10), dateofthepayment datetime, productid varchar(10), quantity int check(quantity>0), foreign key(customerphone) references customer(customerphone),foreign key(productid) references product(productid))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});