// Import and require mysql2
const mysql = require('mysql2');
// Import and require inquirer
const inquirer = require('inquirer');
// Import and require console.table method for convenience
require('console.table');


// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'BeSmart2023!',
    database: 'company_db'
  },
  // use .promise() so that we can use await on connection
  console.log(`Connected to the company_db database.`)) 
  // .promise()
  ;

  