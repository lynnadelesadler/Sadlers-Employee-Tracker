const addRoleQuestions = (options)=> {
   return  [
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
      ]
} 
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
  ]

  const addEmployeeQuestions = (options)=> {
    return  [
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
            choices: ["SELECT * FROM employee WHERE id != ?"],
          },
       ]
 } 

 const updateEmployeeQuestions = (options)=> {
    return  [
            
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
            choices: options,
          },
          {
            name: "manager",
            type: "list",
            message: "Who is the manager for the new employee?",
            choices: options,
          },
       ]
 } 

module.exports= {addRoleQuestions, addDepartmentQuestions, addEmployeeQuestions, updateEmployeeQuestions}