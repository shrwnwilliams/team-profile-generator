const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");
const fs = require("fs");
const path = require("path");
const render = require("./src/page-template");


const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPath = path.join(OUTPUT_DIR, "team.html")

//main logic
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
        message:"What is the team manager's number?"
    },
    {
        type: "list",
        name:"continue",
        message:"do you want to add more teammates?",
        choices: ["yes", "no"]
    }
    ]).then(answers => {
        // console.log(answers);
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
        // console.log(manager);
        membersArray.push(manager);
        console.log(membersArray);
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
        console.log(answers);
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGitHub);
        console.log(engineer);
        membersArray.push(engineer);
        console.log(membersArray);
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
        console.log(answers);
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        console.log(intern);
        membersArray.push(intern);
        console.log(membersArray);
        if (answers.continue=== "yes") {
            createTeam();
        } else {
            buildTeam();
        }
    })

}

function runApp(){
    createManager();
}

runApp();