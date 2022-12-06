// Import and require mysql2
const mysql = require("mysql2");
// Import and require inquirer
const inquirer = require("inquirer");
const {addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions, updateEmployeeQuestions} = require("./questions");
// Import and require console.table method for convenience
require("console.table");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "BeSmart2023!",
    database: "company_db",
  },
  // use .promise() so that we can use await on connection
  console.log(`Connected to the company_db database.`)
);
// .promise()
// Start the application in command-line by typing node index - Application Menu function
// User is presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
const appMenu = async () => {
  inquirer
    .prompt({
      message: "What would you like to do?",
      name: "menu",
      type: "list",
      choices: [
        "View all departments",
        "View all roles",
        "View all employees",
        "Add a department",
        "Add a role",
        "Add an employee",
        "Update employee role",
        "Exit",
      ],
    })
    .then((response) => {
      switch (response.menu) {
        case "View all departments":
          console.log("View all departments");
          viewDepartment();
          break;
        case "View all roles":
          console.log("View all roles");
          viewRoles();
          break;
        case "View all employees":
          console.log("View all employees");
          viewEmployees();
          break;
        case "Add a department":
          console.log("Add a department");
          addDepartment();
          break;
        case "Add a role":
          console.log("Add a role");
          addRole();
          break;
        case "Add an employee":
          console.log("Add an employee");
          addEmployee();
          break;
        case "Update employee role":
          console.log("Update employee role");
          updateEmployee();
          break;
        case "Exit":
          db.end();
          break;
        default:
          db.end();
      }
    });
};
// If user selects view all departments option from the menu, query all rows from department table
// err is invoked if response fails to pull rows from department table
const viewDepartment = () => {
  db.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    console.table(res);
    appMenu();
  });
};
// If user selects view all departments option from the menu, query all rows from roles table
// err is invoked if response fails to pull rows from roles table
const viewRoles = () => {
  db.query("SELECT roles.id, roles.title, roles.salary, department.department_name AS department FROM roles LEFT JOIN department ON roles.department_id = department.id", function (err, res) {
    if (err) throw err;
    console.table(res);
    appMenu();
  });
};

const viewEmployees = () => {
  db.query("SELECT employee.id, employee.first_name, employee.last_name, roles.title, department.department_name AS department, roles.salary, CONCAT(manager.first_name, ' ' , manager.last_name) AS manager FROM employee LEFT JOIN roles ON employee.role_id = roles.id LEFT JOIN department ON roles.department_id = department.id LEFT JOIN employee manager ON manager.id = employee.manager_id", function (err, res) {
    if (err) throw err;
    console.table(res);
    appMenu();
  });
};

const addDepartment = () => {
  inquirer
    .prompt(addDepartmentQuestions)
    .then((answer) => {
      db.query(
        "INSERT INTO department (department_name) VALUES (?)",
        [answer.department],
        function (err, res) {
          if (err) throw err;
          console.log("Department added to the database!");
          appMenu();
        }
      );
    });
};



const addRole = async () => {
  var [rows, fields] = await db
    .promise()
    .query("SELECT id AS value, department_name AS name FROM department");
    console.log(rows);
  var answer = await inquirer.prompt(addRoleQuestions(rows));
  console.log(answer);
  db.query(
    "INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)",
    [answer.jobTitle, answer.salary, answer.department],
    function (err, res) {
      if (err) throw err;
      console.log("role added to the database!");
      viewRoles();
    }
  );
};

const addEmployee = async () => {
  var [rows, fields] = await db
  .promise()
  .query("SELECT roles.id AS value, roles.title as name FROM roles, LEFT JOIN employee ON roles.id = employee.role_id, CONCAT(employee.first_name, ' ' , employee.last_name) AS name FROM employee");
console.log(rows);
var answer = await inquirer.prompt(addEmployeeQuestions(rows));
console.log(answer);
db.query(
        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
        [answer.nameFirst, answer.nameLast, answer.role, answer.manager_id],
        function (err, res) {
          if (err) throw err;
          console.log("Employee added to the database!");
          viewEmployees();
        }
      );
};

const updateEmployee = async () => {
  var [rows, fields] = await db
  .promise()
  .query("SELECT CONCAT(employee.first_name, ' ' , employee.last_name) AS name FROM employee");
  console.log(rows);
var answer = await inquirer.prompt(updateEmployeeQuestions(rows));
console.log(answer);
db.query(
        "UPDATE employee SET role_id=? WHERE id=?",
        [answer.jobId, answer.id],
        function (err, res) {
          if (err) throw err;
          console.log("Employee updated!");
          viewEmployees();
        }
      );
};
appMenu();
