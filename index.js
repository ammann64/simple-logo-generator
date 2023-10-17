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
            case 'circle': //If a circle was selected
                var logoData = new Circle(text, textColor, setWidth, setHeight, shapeColor); //Constructs a new circle with the user input
                // console.log(logoData);
                var logo = logoData.formatCircle(); //Formats the data into SVG
                console.log(logo);
                RenderSVG(logo); //Writes the logo to a file
                break;
            case 'rectangle': //If a rectangle was selected
                var logoData = new Rectangle(text, textColor, setWidth, setHeight, shapeColor); //Constructs a new rectangle with the user input
                var logo = logoData.formatRectangle(); //Formats the data into SVG
                console.log(logo);
                RenderSVG(logo); //Writes the logo to a file
                break;
            case 'triangle':
                var logoData = new Triangle(text, textColor, setWidth, setHeight, shapeColor); //Constructs a new triangle with the user input
                var logo = logoData.formatTriangle(); //Formats the data into SVG
                console.log(logo)
                RenderSVG(logo); //Writes the logo to a file
                break;
            default:
                console.error('Invalid shape, please try again'); //If somehow an invalid shape was selected, outputs an error
        }
    })


function RenderSVG(logo) {
    fs.writeFile(filePath, logo, (err) =>
    err ? console.error(err) : console.log('Generated logo.svg'));
}