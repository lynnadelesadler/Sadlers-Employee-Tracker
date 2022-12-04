// Import and require mysql2
const mysql = require('mysql2');
// Import and require inquirer
const inquirer = require('inquirer');
// Import and require console.table method for convenience
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;


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
  console.log(`Connected to the company_db database.`)
);


  db.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
  