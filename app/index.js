const mysql = require('mysql');
const cTable = require('console.table');
const inquirer = require('inquirer');
const { Department, Role, Employee } = require('./class');


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

const addRole = (roleObject) => {
  const query = connection.query(
    'INSERT INTO roles SET ?',
    {
      id: roleObject.id,
      title: roleObject.name,
      salary: roleObject.salary,
      department_id: roleObject.departmentID,
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} role added.\n`)
      viewRoles();
    }
  );
  console.log(query.sql);
};

const addEmployee = (employeeObject) => {
    const query = connection.query(
    'INSERT INTO employees SET ?',
    {
      id: employeeObject.id,
      first_name: employeeObject.first_name,
      last_name: employeeObject.last_name,
      role_id: employeeObject.roleID,
      manager_id: employeeObject.managerID,
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} role added.\n`)
      viewEmployees();
    }
  );
console.log(query.sql);};

const viewDepartments = () => {
  const query = connection.query(
    'SELECT * FROM departments', 
    (err, res) => {
      if (err) throw err;
      console.table(res);
    }
  )
};

const viewRoles = () => {
  const query = connection.query(
    'SELECT * FROM roles', 
    (err, res) => {
      if (err) throw err;
      console.table(res);
    }
  )
};

const viewEmployees = () => {
  const query = connection.query(
    'SELECT * FROM employees', 
    (err, res) => {
      if (err) throw err;
      console.table(res);
    }
  )
};

const updateEmployeeRole = () => {};

const updateEmployeeManager = () => {};

const viewManagerReports = () => {};

const deleteDepartment = () => {};

const deleteRole = () => {};

const deleteEmployee = () => {};

const viewCombinedSalaries = () => {};





const appStartQuestions = [
    {
        type: "list",
        name: "appStartChoice",
        choices: [
            "View Departments",
            "View Roles",
            "View Employees",
            "Exit",
        ],
        message: "Welcome to SQL_CMS! Please select an option to continue.",
    }
]

async function appPrompter() {
    //Export this function to index.js. Break off other inquirer functions for modularity.
    let appStartChoice = await inquirer.prompt(appStartQuestions);
    while (appStartChoice.appStartChoice !== "Exit") {
        switch (appStartChoice.appStartChoice) {
            case "View Departments":
                console.log('view department function here');
                appStartChoice = await inquirer.prompt(appStartQuestions);
                continue;
            case "View Roles":
                console.log('view roles function here');
                appStartChoice = await inquirer.prompt(appStartQuestions);
                continue;
            case "View Employees":
                console.log('view employees function here');
                appStartChoice = await inquirer.prompt(appStartQuestions);
                continue;
            default:
                continue;

        }
    }
    console.log('Thanks for using the app!');
    return;
}


connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected to ${connection.database} as ID: ${connection.threadId}\n`);
  appPrompter()
  connection.end()
})