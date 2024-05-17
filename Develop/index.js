// Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');


// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project'
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project'
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Provide installation instructions'
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Provide the user with instructions on usage'
  },
  {
    type: 'list',
    name: 'license',
    message: 'Please select any license applicable to your project',
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Provide instructions on how to contribute to your project'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Provide tests and examples for your app and how to run them'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email'
  }
];

// Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile('README.md', data, (err) => {

    //If any errors, they will be console logged, otherwise, a success message will be logged.
    err ? console.error(err) : console.log('ReadMe.md file has been generated successfully!')
  });
};

// Create a function to initialize app
async function init() {
  // Prompting user for input and storing it into a variable representing the answers
  const answers = await inquirer.prompt(questions);

  // Console logging answers to make sure inquirer.prompt is working
  console.log(answers);

  // Storing the answers into a variable representing the readme content
  const readMeContent = generateMarkdown(answers);

  writeToFile('README.md', readMeContent);
}

// Function call to initialize app
init();
