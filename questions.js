const addRoleQuestions = (options) => {
  return [
    {
      name: "jobTitle",
      type: "input",
      message: "What is the name of the role?",
    },
    {
      name: "salary",
      type: "input",
      message: "What is the salary for this role?",
    },
    {
      name: "department",
      type: "list",
      message: "Which department does the role belong to?",
      choices: options,
    },
  ];
};
addDepartmentQuestions = [
  {
    name: "department",
    type: "input",
    message: "What is the department name?",
    validate: (input) => {
      if (input) {
        return true;
      } else {
        console.log("Please enter the department name!");
        return false;
      }
    },
  },
];

const addEmployeeQuestions = (options, options2) => {
  return [
    {
      name: "nameFirst",
      type: "input",
      message: "What is the employee's first name?",
    },
    {
      name: "nameLast",
      type: "input",
      message: "What is the employee's last name?",
    },
    {
      name: "role",
      type: "list",
      message: "What is the employee's role?",
      choices: options,
    },
    {
      name: "manager",
      type: "list",
      message: "Who is the manager for the new employee?",
      choices: options2,
    },
  ];
};

const updateEmployeeQuestions = (options, options2, options3) => {
  return [
    {
      name: "name",
      type: "list",
      message: "What is the employee's name?",
      choices: options,
    },
    {
      name: "role",
      type: "list",
      message: "What is the employee's role?",
      choices: options2,
    },
  ];
};

module.exports = {
  addRoleQuestions,
  addDepartmentQuestions,
  addEmployeeQuestions,
  updateEmployeeQuestions,
};
