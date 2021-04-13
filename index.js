const inquirer = require("inquirer");
const Manager = require("./lib/Manager");


const OUTPUT_DIR = path.resolve(__dirname, "dist")
const outputPtath = path.join(OUTPUT_DIR, "team.html")

//main logic
const membersArray = []

function createManager(){
    inquirer.prompt([{
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
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerNumber);
        console.log(manager);
        membersArray.push(manager);
        console.log(membersArray);
    })
}

function createEngineer(){

}

function createIntern(){

}

function runApp(){
    createManager();
}

runApp();