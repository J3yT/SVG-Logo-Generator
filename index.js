const { Triangle, Circle, Square } = require("./lib/shapes");
const inquirer = require("inquirer");

const startPrompt = async () => {
  const startPrompt = await inquirer.prompt([
    {
      type: "list",
      name: "shape",
      message: "What shape would you like to use?",
    },
    {
      type: "input",
      name: "text",
      message: "What text would you like to display on your shape?",
    },
    {
      type: "input",
      name: "textColor",
      message: "What text color would you like to use?",
    },
    {
      type: "input",
      name: "shapeColor",
      message: "What shape color would you like to use?",
    },
  ]);
};

let shape;
switch (initialPrompt.shape) {
  case "circle":
    shape = new Circle();
    break;
  case "square":
    shape = new Square();
    break;
  case "triangle":
    shape = new Triangle();
    break;
  default:
    throw Error("Error creating the SVG Shape");
}
const fs = require("fs");
let SVG = require("./lib/svg");

let example = new SVG("AND", "green", "triangle", "yellow");

fs.writeFile("shape.svg", example.markUp, function (err) {
  if (err) console.log(err);
});
