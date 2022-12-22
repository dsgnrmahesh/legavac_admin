/*  const mysql = require("mysql");

// create here mysql connection

const dbConn = mysql.createConnection({
  host: "103.102.234.70",
  user: "tkdbutxh_legavac",
  password: "adminlegavac123",
  database: "tkdbutxh_dblegavac",
  multipleStatements: true,
 
});

dbConn.connect(function (error) {
  if (error) {
    throw error;
  } else {
    console.log("Database Connected Successfully!!!");
  }
});

module.exports = dbConn;
*/

const mysql = require("mysql");

// create here mysql connection

// const dbConn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "",
//   database: "legavac_db",
//   multipleStatements: true,
 
// });

const dbConn = mysql.createConnection({
  host: "103.159.85.212",
  user: "legavac_legavac_db_test",
  password:"@Mnd7GvkfeqN",
  database:"legavac_db_test",
  multipleStatements: true,
 
});


// const dbConn = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password:"",
//   database:"legavac_db_test",
//   multipleStatements: true,
 
// });


dbConn.connect(function (error) {
  if (error) {
    throw error;
  } else { 
    console.log("Database Connected Successfully!!!");
  }
});

module.exports = dbConn;





















