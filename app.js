/*
//# Step-1
//## Capture user input with command-line arguments
// const profileDataArgs = process.argv.slice(2);
//ပြောင်းလဲဖြစ်စဥ်-4
const profileDataArgs = process.argv.slice(2, process.argv.length);

const printProfileData = (profileDataArr) => {
  // This...
  for (let i = 0; i < profileDataArr.length; i += 1) {
    console.log(profileDataArr[i]);
  }

  console.log("================");

  // Is the same as this...
  profileDataArr.forEach((profileItem) => console.log(profileItem));
};

printProfileData(profileDataArgs);

//# Step-2
//## Generate HTML page
//ပြောင်းလဲဖြစ်စဥ်-၁
// const generatePage = () => "Name: Jane, Github: janehub";
// console.log(generatePage());

//ပြောင်းလဲဖြစ်စဥ်-၂
// const generatePage = (userName, githubName) =>
//   `Name: ${userName}, Github: ${githubName}`;
// console.log(generatePage("Jane", "janehub"));


//ပြောင်းလဲဖြစ်စဥ်-၃
const generatePage = (userName, githubName) => {
  return `
      Name: ${userName}
      GitHub: ${githubName}
    `;
};
console.log(generatePage("Jane", "janehub"));

//ပြောင်းလဲဖြစ်စဥ်-4
// const name = profileDataArgs[0];
// const github = profileDataArgs[1];
const [name, github] = profileDataArgs;
console.log(name, github); //နောက်တိုး
console.log(generatePage(name, github));

//ပြောင်းလဲဖြစ်စဥ်-5
const generatePage = (name, github) => {
  return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      <h1>${name}</h1>
      <h2><a href="https://github.com/${github}">Github</a></h2>
    </body>
    </html>
    `;
};
console.log(generatePage("Zaw", "Maung"));

//ပြောင်းလဲဖြစ်စဥ်-6
const fs = require("fs");

const profileDataArgs = process.argv.slice(2);

const [name, github] = profileDataArgs;

const generatePage = (name, github) => {
  return `
  <!DOCTYPE html> 
  <html lang="en"> 
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
  </head>

  <body>
    <h1>${name}</h1>
    <h2><a href="https://github.com/${github}">Github</a></h2>
  </body>
  </html>
  `;
};

fs.writeFile("./index.html", generatePage(name, github), (err) => {
  if (err) throw new Error(err);

  console.log("Portfolio complete! Check out index.html to see the output!");
});
*/

//ပြောင်းလဲဖြစ်စဥ်-7
