-- query departmnt table to the role table --
SELECT department.department_name AS deparment, role.department_id
FROM role
LEFT JOIN department
ON role.department_id = department.id

-- query role table to the employee table --
SELECT role.title AS role, employee.role_id
FROM employee
LEFT JOIN role
ON employee.role_id = role.id

-- query emloyee table to join the employee id to the manager id --
SELECT employee.id AS employee, employee.manager_id
FROM employee
LEFT JOIN employee
ON employee.employee.id = manager_id