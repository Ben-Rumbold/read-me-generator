// const inquirer = require("inquirer");
// import inquirer from "inquirer"; // was
// const generateREADME = require("./utils/generateREADME");
// import generateREADME from './utils/generateREADME';
// import generateREADME from "./utils/generateREADME.js"; // was

//Including packages needed for this application
// const fs = require("fs");
// const inquirer = require("inquirer");
// const path = require("path");
// const generateREADME = require("./utils/generateREADME");

// new
import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import generateREADME from "./utils/generateREADME.js";

const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your projects name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },
  {
    type: "checkbox",
    name: "license",
    message: "What kind of license should your project have?",
    choices: [
      "MIT",
      "APACHE 2.0",
      "Boost1.0",
      "MPL2.0",
      "BSD2",
      "BSD3",
      "none",
    ],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install dependencies",
  },
  {
    type: "input",
    name: "tests",
    message: "What command should be run to run tests?",
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about using the repo?",
  },
  {
    type: "input",
    name: "contributing",
    message: "What does the user need to know about contributing to the repo?",
  },
];

// Writing README.md File
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Initializing app
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log("Creating Professional README.md File...");
    writeToFile("./dist/README.md", generateREADME({ ...responses }));
  });
}
init();

// was
// inquirer
//   .prompt(questions)
//   .then((answers) => {
//     const readmeContent = generateREADME(answers);

//     const fs = require("fs");
//     fs.writeFileSync("README.md", readmeContent);

//     console.log("README.md successfully generated!");
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });

// import("inquirer")
//   .then((inquirer) => {
//     // Now you can use inquirer.prompt with the predefined questions
//     inquirer.prompt(questions).then((answers) => {
//       // Process the answers here
//       console.log("Answers:", answers);

//       const readmeContent = generateREADME(answers);

//       const fs = require("fs");
//       fs.writeFileSync("README.md", readmeContent);

//       console.log("README.md successfully generated!");
//     });
//   })
//   .catch((error) => {
//     console.error("Error:", error);
//   });
