console.log("terry")

const inquirer = require("inquirer")
const fs = require("fs")
const fileName = ("generated-readme.md")

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "What is your name?",
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "input",
            name: "github",
            message: "What is your github project link? Please be sure to include the full URL, including https",
        },
        {
            type: "input",
            name: "title",
            message: "What is the title of your project?",
        },
        {
            type: "input",
            name: "description",
            message: "Provide a brief description of your project",
        },
        {
            type: "input",
            name: "installation",
            message: "Let users know how to install and run your project",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the appropriate use case for your project? How can users use the project?",
        },
        {
            type: "input",
            name: "contributing",
            message: "How can developers contribute to your project?",
        },
        {
            type: "input",
            name: "tests",
            message: "What is the title of your project?",
        }
    ]).then( ({ name, location, bio, linkedin, github }) => {
        console.log("this is the title", name)
        console.log("this is the description", description)
        console.log("this is the tableOfContents", tableOfContents)
        console.log("this is the installation", installation)
        console.log("this is the usage", usage)
        console.log("this is the license", license)
        console.log("this is the contributionGuidelines", contributionGuidelines)
        console.log("this is the tests", tests)
        console.log("this is the questions", questions)
        const readme = 
        `# Table of Contents:
        * [Title](#Title)
        * [Description](#Description)
        * [Usage](#Usage)
        * [Contribution](#Contribution)
        * [Tests](#Tests)
        * [License](#License)
        * [Github](#Github)
        * [Email](#Email)
        # Title:
        # ${answers.title}
        ## Description:
        ${answers.description}
        #Usage
        ${answers.usage}
        #Contribution Guidelines
        ${answers.contribution}
        #Tests
        Some of the tests that I ran for this project are: ${answers.tests}.
        #License
        MIT License
        Copyright (c) 2021 ${answers.name}
        Permission is hereby granted, free of charge, to any person obtaining a copy
        of this software and associated documentation files (the "Software"), to deal
        in the Software without restriction, including without limitation the rights
        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
        copies of the Software, and to permit persons to whom the Software is
        furnished to do so, subject to the following conditions:
        The above copyright notice and this permission notice shall be included in all
        copies or substantial portions of the Software.
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
        SOFTWARE.
        #Github
        Please visit my ${answers.github} to visit my work.
        #Email
        My Email is ${answers.email}. Feel free to reach me here.`;
        fs.writeFile(fileName, readme, (err) =>
        err ? console.error(err) : console.log(`Success! We've created your index.html file`))
    })