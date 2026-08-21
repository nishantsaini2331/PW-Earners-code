let num1 = 53;
let num2 = 4;
let operator = "/"

switch (operator) {
    case "+":
        console.log(num1 + num2);
        break;
    case "*":
        console.log(num1 * num2);
        break;
    case "-":
        console.log(num1 - num2);
        break;
    case "/":
        if (num2 === 0) {
            console.log("Cannot divide by zero");
        } else {
            console.log(num1 / num2);
        }
        break;
    case "%":
        console.log(num1 % num2);
        break;
    default:
        console.log("Invalid operator");
}