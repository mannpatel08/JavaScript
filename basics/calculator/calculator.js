let num1 = 14;
let num2 = 5;
let operator = "+"; 

let operations = {
    "+": num1 + num2,
    "-": num1 - num2,
    "*": num1 * num2,
    "/": num2 !== 0 ? num1 / num2 : "Cannot divide by zero!",
    "%": num1 % num2
};

let result = operations[operator] ?? "Invalid operator!";

console.log("Result of ",num1, operator ,num2,":- ",result);