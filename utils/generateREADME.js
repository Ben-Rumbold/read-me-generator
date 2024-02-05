function generateLicenseBadge(license) {
  const badges = {
    MIT: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    Apache:
      "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    Boost:
      "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    BSD2: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
    BSD3: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  };

  return badges[license] || "";
}

function generateREADME(data) {
  const licenseBadge = generateLicenseBadge(data.license);
  const readmeContent = `
  # ${data.title}
  ${licenseBadge}
  
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

export default generateREADME;
