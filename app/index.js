const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'sql_cms',
  });

const addDepartment = () => {};

const addRole = () => {};

const addEmployee = () => {};

const viewDepartments = () => {};

const viewRoles = () => {};

const viewEmployees = () => {};

const updateEmployeeRole = () => {};

const updateEmployeeManager = () => {};

const viewManagerReports = () => {};

const deleteDepartment = () => {};

const deleteRole = () => {};

const deleteEmployee = () => {};

const viewCombinedSalaries = () => {};