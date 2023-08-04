const inquirer = require("inquirer");
const fs = require("fs")
const { generateSVG } = require("./lib/GenerateSVG");
const { generateShape } = require('./lib/GenerateShape.js');
const { error } = require("console");

function init() {
    inquirer 
.prompt([
    {
        type: 'input',
        name: 'logoName',
        message: 'Please enter 1-3 characters for your logo name',
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Please enter color keyword or hexadecimal for your logos text color',
    },
    {
        type: 'input',
        name: 'logoColor',
        message:'Please enter color keyword or hexadecimal for your logos background color',
    },
    {
            type: 'list',
            name: 'logoShape',
            message: 'Please choose a shape for your logo',
        choices: ['Triangle', 'Square,', 'Circle'], 
    }
])
.then((data) => {
    const svgPath = './Assets/GeneratedLogo.svg';
    const finalLogo = generateShape(data);


    fs.writeFile(svgPath, generateSVG(finalLogo), (err) =>
    err ? console.error(err) : console.log("Generated Logo")
    );
})
.catch((err) => console.log(err))
};

init()