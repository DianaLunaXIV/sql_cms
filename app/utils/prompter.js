const inquirer = require('inquirer');
const { Department, Role, Employee } = require('../class');

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

module.exports = appPrompter