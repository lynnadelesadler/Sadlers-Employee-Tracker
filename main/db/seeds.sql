USE company_db;

INSERT INTO department(id, department_name)
VALUES 
(1, "Management"),
(2, "Sales"),
(3, "Accounting"),
(4, "Reception"),


INSERT INTO roles(id, title, salary, department_id)
VALUES 
(1, "Regional Manager", 100000, 1),
(2, "Director of Sales", 85000, 2),
(3, "Sales Rep", 75000, 2),
(4, "Cheif Accountant", 90000, 3),
(5, "Accountant", 80000, 3),
(6, "Receptionist", 50000, 4),


INSERT INTO employee(id, first_name, last_name, role_id, manager_id)
VALUES 
(1, 'Michael', 'Scott', 1, NULL),
(2, 'Dwight', 'Schrute', 2, 1),
(3, 'Jim', 'Halpert', 3, 2),
(4, 'Oscar Martinez', 4, 1),
(5, 'Angela', 'Martin', 5, 4),
(6, 'Kevin', 'Malone', 6, 4),
(7, 'Pam', 'Beesly', 7, 1),