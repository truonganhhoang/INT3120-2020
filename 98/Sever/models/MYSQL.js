const mysql = require('mysql');



exports.conn =function()
{
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "appb2"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  
  });
  return con;
}


