const mysql = require('mysql');
const inquirer = require('inquirer');
const cTable = require('console.table');
const Department = require('./class/Department');

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: 'sql_cms',
  });

const addDepartment = (deptObject) => {
  const query = connection.query(
    'INSERT INTO departments SET ?',
    {
      id: deptObject.id,
      name: deptObject.name,
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} department added.\n`)
      viewDepartments();
    }
  );
  console.log(query.sql);
};

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


connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected as ID: ${connection.threadId}\n`);
  const ossusTemple = new Department(2, 'Ossus Archives');
  addDepartment(ossusTemple);
  connection.end();
})