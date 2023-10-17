// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for the shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
const inquirer = require('inquirer');
const {Rectangle, Triangle, Circle} = require('./lib/shapes')
const fs = require('fs');
const setWidth = 300;
const setHeight = 200;
const questions = [ // Questions array to pass into inquirer
    {name: 'text', message: 'Please enter up to three characters to display in the logo: '},
    {name: 'textColor', message: 'Please enter the desired text color in keyword or hexidecimal format: '},
    {type: 'list', name: 'shape', message: 'Please choose a shape: ', choices: ['circle', 'triangle', 'rectangle']},
    {name: 'shapeColor', message: 'Please enter the desired shape color in keyword or hexidecimal format: '}
];
const filePath = './examples/logo.svg';


inquirer
    .prompt(questions) //Prompts the user
    .then((answers) => { //Once answers are received...
        const {text, textColor, shape, shapeColor} = answers;
        switch (shape) {
            case 'circle':
                var logoData = new Circle(text, textColor, setWidth, setHeight, shapeColor);
                console.log(logoData);
                var logo = logoData.formatCircle();
                console.log(logo);
                RenderSVG(logo);
                break;
            case 'rectangle':
                var logoData = new Rectangle(text, textColor, setWidth, setHeight, shapeColor);
                var logo = logoData.formatRectangle();
                console.log(logo);
                RenderSVG(logo);
                break;
            case 'triangle':
                var logoData = new Triangle(text, textColor, setWidth, setHeight, shapeColor);
                var logo = logoData.formatTriangle();
                console.log(logo)
                RenderSVG(logo);
                break;
            default:
                console.error('Invalid shape, please try again');
        }
    })


function RenderSVG(logo) {
    fs.writeFile(filePath, logo, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg'));
}