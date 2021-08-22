//path, fs, activity 20, second js. //default npm i. require inquirer, generate markdown (path to second js), path, fs
// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?',
      },
      {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
      },
      {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?',
      }, 
      {
        type: 'input',
        name: 'description',
        message: 'Please describe your project in a few short sentences:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'What type of license does your project have?',
        choices: ['MIT', 'APACHE2.0', 'BOOST1.0', 'GPL3.0', 'BSD2', 'BSD3', 'NONE'],
      },
      {
        type: 'input',
        name: 'dependencies',
        message: 'What dependencies need to be installed?',
        default: ['npm i'],
      }, 
      {
        type: 'input',
        name: 'test',
        message: 'What command should be used to run tests?',
        default: 'npm test'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Give us a short description of the usage of this repo:',
      },
      {
        type: 'input',
        name: 'contributors',
        message: 'Who are the contributors of this repo?',
      }, 
];
// const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
        .then((inquirerAnswers) => {
            console.log("Generating.... Please wait....");
            writeToFile("README.md", generateMarkdown({ ...inquirerAnswers }));
        });
}

// function call to initialize program
init();