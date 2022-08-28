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
    type: "confirm",
    name: "feature",
    message: "Would you like to feature this project?",
    default: false,
  },
  {
    type: "checkbox",
    name: "walk-through_video",
    message: "Screenshot/s of the project",
    choices: [
      "![walk-through](https://github.com/Minmaung0307/professional-readme_generator/blob/f16c46acd2dd616dfcb1ea80976d9942d9d4c285/images:movies/readme.mp4)",
    ],
  },
  {
    type: "checkbox",
    name: "screenshot",
    message: "Screenshot/s of the project",
    choices: [
      "![screenshot](https://github.com/Minmaung0307/professional-readme_generator/blob/30757d803f7e6c5da736378a603a6747abc466f7/images/readme.png)",

      // "![password-generator](https://github.com/Minmaung0307/professional-readme_generator/blob/404ac8412adba13b5de1992c3f56b9353ac1a891/images/password-generator.png)",

      // "![Quiz-exam](https://github.com/Minmaung0307/professional-readme_generator/blob/d28b6ed3a41428d87705df825517eb734127710d/images/quiz-exam.png)",

      // "![Runbuddy](https://github.com/Minmaung0307/professional-readme_generator/blob/d28b6ed3a41428d87705df825517eb734127710d/images/runbuddy.png)",

      // "![Workday-scheduler](https://github.com/Minmaung0307/professional-readme_generator/blob/d28b6ed3a41428d87705df825517eb734127710d/images/workday-scheduler.png)",
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

  // let content = "";
  // if (အချက်အလက်.contents) {
  //   အချက်အလက်.contents.forEach(function (value, index) {
  //     let number = Number(index) + 1;
  //     content += number + ". " + value + "<br>";
  //   });
  // }

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
  ${အချက်အလက်.walk - through_video}

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

// const readmeProjectData = { objects: [] };

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
