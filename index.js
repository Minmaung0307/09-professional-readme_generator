// TODO: Include packages needed for this application
const fs = require("fs");
const path = require("path");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project? (Required)",
    validate: (စာရိုက်ပါ) => {
      if (စာရိုက်ပါ) {
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
    validate: (အကျဥ်းချုပ်) => {
      if (အကျဥ်းချုပ်) {
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
    message: "What did you make this project with? (Check all that apply)",
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
    type: "input",
    name: "feature",
    message: "Would you like to add feature of this project?",
  },
  {
    type: "input",
    name: "video",
    message: "Add your youtube video link here!",
  },
  {
    type: "checkbox",
    name: "screenshot",
    message: "Screenshot/s of the project",
    choices: [
      "![screenshot](https://github.com/Minmaung0307/professional-readme_generator/blob/30757d803f7e6c5da736378a603a6747abc466f7/images/readme.png)",
    ],
  },
];

// TODO: Create a function to write README file
function writeToFile(အချက်အလက်) {
  console.log(အချက်အလက်);

  let language = "";
  if (အချက်အလက်.languages) {
    အချက်အလက်.languages.forEach(function (value, index) {
      let number = Number(index) + 1;
      language += number + ". " + value + "<br>";
    });
  }

  let fileTxt = `

  # Title
  ${အချက်အလက်.title}

  ## Description
  ${အချက်အလက်.description}

  ## Languages
  ${language}

  ## Link
  ${အချက်အလက်.link}

  ## Feature
  ${အချက်အလက်.feature}

  ## Walk-Through
  [![Click this link to watch video]](${အချက်အလက်.video})

  ## Screenshot
  ${အချက်အလက်.screenshot}
  `;

  fs.writeFile(`./readme/${အချက်အလက်.title}.md`, fileTxt, function (err) {
    if (err) {
      console.log(err);
      throw err;
    } else {
      console.log("Success!");
    }
  });
}

const promptQuestions = () => {
  return (
    inquirer
      .prompt(questions)
      .then((data) => {
        console.log(data);
        writeToFile(data);
      })
  );
};

// TODO: Create a function to initialize app
function init() {
  promptQuestions();
}

// Function call to initialize app
init();
