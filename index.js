const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
const path = require("path");
const render = require("./src/page-template");
const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html")
const membersArray = []

function createManager(){
    inquirer.prompt([
        {
        type: 'input',
        name: "managerName",
        message: "What is your team manager's name?",
    },
    {
        type: "input",
        name:"managerId",
        message:"What is the team manager's ID?",
    },
    {
        type: "input",
        name: "managerEmail",
        message: "what is the manager's email?"
    },
    {
        type: "input",
        name:"managerNumber",
        message:"What is the team manager's office number?"
    },
    {
        type: "list",
        name:"continue",
        message:"do you want to add more teammates?",
        choices: ["yes", "no"]
    }
    ]).then(answers => {
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
        membersArray.push(manager);
        if (answers.continue === "yes") {
            createTeam();
        } else{
            buildTeam();
        }
    })
}

function createTeam(){
    inquirer.prompt([
        {
            type: "list",
            name: "teamMember",
            message:"Select which team member you want to build",
            choices: ["engineer", "intern"]
        }
    ]).then(answers => {
        if (answers.teamMember === "engineer") {
            createEngineer();
        } else{
            createIntern();
        }
    })
}

function createEngineer(){
    inquirer.prompt([
        {
        type: 'input',
        name: "engineerName",
        message: "What is your team engineer's name?",
    },
    {
        type: "input",
        name:"engineerId",
        message:"What is the team engineer's ID?",
    },
    {
        type: "input",
        name: "engineerEmail",
        message: "what is the engineer's email?"
    },
    {
        type: "input",
        name:"engineerGitHub",
        message:"What is the engineer's GitHub username?"
    },
    {
        type: "list",
        name:"continue",
        message:"do you want to add more teammates?",
        choices: ["yes", "no"]
    }
    ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        membersArray.push(engineer);
        if (answers.continue=== "yes") {
            createTeam();
        } else {
            buildTeam();
        }
    })

}

function createIntern(){
    inquirer.prompt([
        {
        type: 'input',
        name: "internName",
        message: "What is your team intern's name?",
    },
    {
        type: "input",
        name:"internId",
        message:"What is the team intern's ID?",
    },
    {
        type: "input",
        name: "internEmail",
        message: "what is the intern's email?"
    },
    {
        type: "input",
        name:"internSchool",
        message:"What is the intern's school?"
    },
    {
        type: "list",
        name:"continue",
        message:"do you want to add more teammates?",
        choices: ["yes", "no"]
    }
    ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        membersArray.push(intern);
        if (answers.continue=== "yes") {
            createTeam();
        } else {
            buildTeam();
        }
    })

}

function buildTeam(){
    if (!fs.existsSync(OUTPUT_DIR)) {
        fs.mkdirSync(OUTPUT_DIR);
    }
    fs.writeFileSync(outputPath, render(membersArray), "utf-8");
}

function runApp(){
    createManager();
}

runApp();