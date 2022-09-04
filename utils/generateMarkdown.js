// function to generate markdown for README
function generateMarkdown(အချက်အလက်) {
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
  ${အချက်အလက်.language}

  ## Link
  ${အချက်အလက်.link}

  ## Feature
  ${အချက်အလက်.feature}

  ## Installation
  ${အချက်အလက်.installation}

  ## Walk-Through
  [![Click this link to watch video]](${အချက်အလက်.video})

  ## Screenshot
  ${အချက်အလက်.screenshot}
  `;
  return fileTxt;
  // fs.writeFile(`./dist/${အချက်အလက်.title}.md`, fileTxt, function (err) {
  //   if (err) {
  //     console.log(err);
  //     throw err;
  //   } else {
  //     console.log("Success!");
  //   }
  // });
}

module.exports = generateMarkdown;
