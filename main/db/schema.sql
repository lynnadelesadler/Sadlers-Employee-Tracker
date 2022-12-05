DROP DATABASE IF EXISTS company_db;
CREATE DATABASE company_db;
USE company_db;

-- DROP TABLE IF EXISTS department;
-- DROP TABLE IF EXISTS roles;
-- DROP TABLE IF EXISTS employee;

CREATE TABLE department (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL
);

CREATE TABLE roles (
  id INT PRIMARY KEY AUTO_INCREMENT,
  title VARCHAR(30) NOT NULL,
  salary DECIMAL NOT NULL,
  department_id INT NOT NULL,
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
  id INT PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  role_id INT,
  manager_id INT,
  FOREIGN KEY (role_id)
  REFERENCES roles(id)
);