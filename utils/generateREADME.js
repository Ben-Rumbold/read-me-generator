// import fs from "fs";

function generateREADME(data) {
  const readmeContent = `
  # ${data.title}
  
  ## Description
  ${data.description || "No description provided."}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [Questions](#questions)
  
  ## Installation
  ${data.installation || "No installation instructions provided."}
  
  ## Usage
  ${data.usage || "No usage information provided."}
  
  ## License
  This application is covered by the ${data.license || "N/A"} license.
  
  ## Contributing
  ${data.contributing || "No contributing guidelines provided."}
  
  ## Tests
  ${data.tests || "No test instructions provided."}
  
  ## Questions
  For additional questions, you can reach me at [${
    data.email || "your@email.com"
  }](mailto:${data.email || "your@email.com"}). 
  Visit my GitHub profile: [${
    data.username || "GitHubUsername"
  }](https://github.com/${data.username || "GitHubUsername"}).
  `;

  return readmeContent;
}

// module.exports = generateREADME;
export default generateREADME;
