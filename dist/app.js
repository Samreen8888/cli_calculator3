import * as inquirer from "inquirer";
import chalk from "chalk";
// calculator operator
var operator;
(function (operator) {
    operator["ADD"] = "Addition";
    operator["SUBTRACT"] = "Subtraction";
    operator["MULTIPLY"] = "multiplication";
    operator["DIVIDE"] = "Division";
})(operator || (operator = {}));
const prompt = inquirer.createPromptModule();
function validateNumber(input) {
    if (isNaN(parseFloat(input))) {
        return "Please enter a valid number";
    }
    return true;
}
async function main() {
    const input = await prompt([
        {
            type: "input",
            name: "num1",
            message: "Please enter the first number:",
            validate: validateNumber,
        },
        {
            type: "rawlist",
            name: "operator",
            message: "Slect an operation:",
            choices: Object.values(operator)
        },
        {
            type: "input",
            name: "num2",
            message: "Please enter the second number:",
            validate: validateNumber,
        }
    ]);
    const num1 = parseFloat(input.num1);
    const num2 = parseFloat(input.num2);
    const selectedOperator = input.operator;
    let result;
    Number;
    if (selectedOperator === operator.ADD) {
        result = num1 + num2;
        console.log(chalk.green.bgRedBright(`Result is : ${result}`));
    }
    else if (selectedOperator === operator.SUBTRACT) {
        result = num1 - num2;
        console.log(chalk.yellow.bgRedBright(`Result is : ${result}`));
    }
    else if (selectedOperator === operator.MULTIPLY) {
        result = num1 * num2;
        console.log(chalk.black.bgRedBright(`Result is : ${result}`));
    }
    else if (selectedOperator === operator.DIVIDE) {
        result = num1 / num2;
        console.log(chalk.blue.bgRedBright(`Result is : ${result}`));
    }
}
main();
