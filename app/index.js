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

//SQL functions
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
    }
  );
  console.log(query.sql);
};

const addEmployee = (employeeObject) => {
  const query = connection.query(
    'INSERT INTO employees SET ?',
    {
      id: employeeObject.id,
      first_name: employeeObject.firstName,
      last_name: employeeObject.lastName,
      role_id: employeeObject.roleID,
      manager_id: employeeObject.managerID,
    },
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} role added.\n`)
    }
  );
  console.log(`\n ${query.sql}\n`);
};

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

const updateEmployeeRole = (employeeID, newRole) => {
  const query = connection.query(
    'UPDATE employees SET ? WHERE ?',[
      {
        role_id: newRole,
      },
      {
        id: employeeID,
      }
    ],
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} role updated.`);
    }
  )
  console.log(query.sql);
};

const updateEmployeeManager = (employeeID, managerID) => {
  const query = connection.query(
    'UPDATE employees SET ? WHERE ?',[
      {
        manager_id: managerID,
      },
      {
        id: employeeID,
      }
    ],
    (err, res) => {
      if (err) throw err;
      console.log(`${res.affectedRows} role updated.`);
    }
  )
  console.log(query.sql);
};

const viewManagerReports = () => { };

const deleteDepartment = () => { };

const deleteRole = () => { };

const deleteEmployee = () => { };

const viewCombinedSalaries = () => { };




//--Inquirer--
//-Questions-
const appStartQuestions = [
  {
    type: "list",
    name: "appStartChoice",
    choices: [
      "View Departments",
      "View Roles",
      "View Employees",
      "Add Department",
      "Add Role",
      "Add Employee",
      "Update Employee Role",
      "Update Employee's Manager",
      "Exit",
    ],
    message: "Welcome to SQL_CMS! Please select an option to continue.",
  }
]
const addDepartmentQuestions = [
  {
    type: 'input',
    name: 'departmentIDInput',
    message: "Please enter the department's ID number."
  },
  {
    type: 'input',
    name: 'departmentNameInput',
    message: "Please enter the department's name."
  },
]

const addRoleQuestions = [
  {
    type: 'input',
    name: 'roleIDInput',
    message: "Please enter the role's ID number."
  },
  {
    type: 'input',
    name: 'roleNameInput',
    message: "Please enter the role's name."
  },
  {
    type: 'input',
    name: 'roleSalaryInput',
    message: "Please enter the role's salary. Do not include commas or other special characters."
  },
  {
    type: 'input',
    name: 'roleDepartmentIDInput',
    message: "Please enter the department ID number to which the role is assigned."
  },
]
const addEmployeeQuestions = [
  {
    type: 'input',
    name: 'employeeIDInput',
    message: "Please enter the employee's ID number.",
  },
  {
    type: 'input',
    name: 'employeeFirstNameInput',
    message: "Please enter the employee's first name.",
  },
  {
    type: 'input',
    name: 'employeeLastNameInput',
    message: "Please enter the employee's last name.",
  },
  {
    type: 'input',
    name: 'employeeRoleIDInput',
    message: "Please enter the employee's role ID."
  },  
  {
    type: 'input',
    name: 'employeeManagerIDInput',
    message: "Please enter the employee's manager's ID number, if the employee has a manager.",
  },
  
]

const updateEmployeeRoleQuestions = [
  {
    type: 'input',
    name: 'employeeIDToUpdate',
    message:'Please enter the ID of the employee whose role you wish to update.',
  },
  {
    type: 'input',
    name: 'employeeNewRole',
    message: 'Please enter the role ID that you want to assign to the employee.'
  }
]

const updateEmployeeManagerQuestions = [
  {
    type: 'input',
    name: 'employeeIDToUpdate',
    message:'Please enter the ID of the employee whose manager you wish to update.',
  },
  {
    type: 'input',
    name: 'employeeNewManager',
    message: 'Please enter the ID of the manager that you want to assign to the employee.'
  }
]
//-Prompter-
async function appPrompter() {
  let appStartChoice = await inquirer.prompt(appStartQuestions);
  while (appStartChoice.appStartChoice !== "Exit") {
    switch (appStartChoice.appStartChoice) {
      case "View Departments":
        viewDepartments();
        appStartChoice = await inquirer.prompt(appStartQuestions);
        continue;
      case "View Roles":
        viewRoles();
        appStartChoice = await inquirer.prompt(appStartQuestions);
        continue;
      case "View Employees":
        viewEmployees();
        appStartChoice = await inquirer.prompt(appStartQuestions);
        continue;
      case "Add Department":
        const rawDepartmentAnswers = await inquirer.prompt(addDepartmentQuestions);
        const assembledDepartment = new Department(rawDepartmentAnswers.departmentIDInput, rawDepartmentAnswers.departmentNameInput);
        addDepartment(assembledDepartment);
        console.log(`Department "${assembledDepartment.name}" added.`)
        appStartChoice = await inquirer.prompt(appStartQuestions);
        continue;
      case "Add Role":
        const rawRoleAnswers = await inquirer.prompt(addRoleQuestions);
        const assembledRole = new Role(rawRoleAnswers.roleIDInput, rawRoleAnswers.roleNameInput, rawRoleAnswers.roleSalaryInput, rawRoleAnswers.roleDepartmentIDInput);
        addRole(assembledRole);
        console.log(`Role "${assembledRole.name}" added.`)
        appStartChoice = await inquirer.prompt(appStartQuestions);
        continue;
      case "Add Employee":
        const rawEmployeeAnswers = await inquirer.prompt(addEmployeeQuestions);
        const assembledEmployee = new Employee(rawEmployeeAnswers.employeeIDInput, rawEmployeeAnswers.employeeFirstNameInput, rawEmployeeAnswers.employeeLastNameInput, rawEmployeeAnswers.employeeRoleIDInput, rawEmployeeAnswers.employeeManagerIDInput);
        addEmployee(assembledEmployee);
        console.log(`Employee "${assembledEmployee.firstName} ${assembledEmployee.lastName}" added.`)
        appStartChoice = await inquirer.prompt(appStartQuestions);
        continue;
      case "Update Employee Role":
        const rawUpdateRoleAnswers = await inquirer.prompt(updateEmployeeRoleQuestions);
        updateEmployeeRole(rawUpdateRoleAnswers.employeeIDToUpdate, rawUpdateRoleAnswers.employeeNewRole);
        appStartChoice = await inquirer.prompt(appStartQuestions);
        continue;
      case "Update Employee's Manager":
        const rawUpdateManagerAnswers = await inquirer.prompt(updateEmployeeManagerQuestions);
        updateEmployeeManager(rawUpdateManagerAnswers.employeeIDToUpdate, rawUpdateManagerAnswers.employeeNewManager);
        appStartChoice = await inquirer.prompt(appStartQuestions);
        continue;
      default:
        continue;

    }
  }
  console.log('Thanks for using the app!');
  connection.end()
  return;
}


connection.connect((err) => {
  if (err) throw err;
  console.log(`Connected to database as ID: ${connection.threadId}\n`);
  appPrompter()
})