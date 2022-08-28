// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
// const axios = require("axios");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (nameInput) => {
      if (nameInput) {
        return true;
      } else {
        console.log("You need to enter a project name!");
        return false;
      }
    },
  },
  {
    type: "input",
    name: "description",
    message: "Provide a description of the project (Required)",
    validate: (descriptionInput) => {
      if (descriptionInput) {
        return true;
      } else {
        console.log("You need to enter a project description!");
        return false;
      }
    },
  },
  {
    type: "checkbox",
    name: "languages",
    message: "What did you this project with? (Check all that apply)",
    choices: [
      "JavaScript",
      "HTML",
      "CSS",
      "ES6",
      "jQuery",
      "Bootstrap",
      "Node",
    ],
  },
  {
    type: "input",
    name: "link",
    message: "Enter the GitHub link to your project. (Required)",
    validate: (linkInput) => {
      if (linkInput) {
        return true;
      } else {
        console.log("You need to enter a project GitHub link!");
        return false;
      }
    },
  },
  {
    type: "confirm",
    name: "feature",
    message: "Would you like to feature this project?",
    default: false,
  },
  {
    type: "confirm",
    name: "confirmAddProject",
    message: "Would you like to enter another project?",
    default: false,
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  console.log(data);

  let content = "";

  let fileTxt = `

  ## Title
  ${data.title}

  ## Link
  ${data.link}
  
  ## Description
  ${data.description}
 ​
  `;

  fs.writeFile(`./readme/${data.title}.md`, fileTxt, function (err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log("Success!");
    }
  });
}

const readmeProjectData = { objects: [] };

const promptQuestions = () => {
  return inquirer
    .prompt(questions)
    .then((projectData) => {
      console.log(projectData);
      return projectData;
    })
    .then((data) => {
      writeToFile(data);
    });
};

// TODO: Create a function to initialize app
function init() {
  promptQuestions();
}

// Function call to initialize app
init();

/*
//var-နဲ့ရေးဟန်
var profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//const-နဲ့ရေးဟန်
const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

//arrow-နဲ့ရေးဟန်-1
const printProfileData = (profileDataArr) => {
  console.log(profileDataArr);
};

//arrow-နဲ့ရေးဟန်-2
const printProfileData = profileDataArr => {
  console.log(profileDataArr);
};

printProfileData(profileDataArgs);
*/
// Notice the lack of parentheses around the `profileDataArr` parameter?
