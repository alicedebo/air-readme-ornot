
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderBadge(data.license)}
  ## Github URL 🌐
  [${data.github}](https://github.com/${data.github}/)
  ## Description 📝
  ${data.description}
  ## Table of Contents 🗒
  * [Installations](#dependencies)
  * [Usage](#usage)
  ${renderLink(data.license)}
  * [Contributors](#contributors)
  * [Test](#test)
  ## Installations (Dependencies) 💻
  To install dependencies, run these commands:
  \`\`\`
  ${data.dependencies}
  \`\`\`
  ## Usage 🏆
  ${data.usage}
  ${renderSection(data.license)}
  ## Contributors 😃
  ${data.contributors}
  Would you like to contribute? Contact me at ${data.email}
  ## Tests 🧪
  To run tests, run these commands:
  \`\`\`
  ${data.test}
  \`\`\`
  
`;
}
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderBadge(license) {
if (license !== "None") {
  return `![GitHub license](https://img.shields.io/badge/license-${license}-yellowgreen.svg)`;
}
return '';
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLink(license) {
if (license !== "None") {
  return (
    `\n* [License](#license)\n`
  );
}
return '';
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderSection(license) {if (license !== "None") {
  return (
    `## License 📛
    Copyright © ${license}. All rights reserved. 
    
    Licensed under the ${license} license.`

  );
}
return ''}

module.exports = generateMarkdown;
