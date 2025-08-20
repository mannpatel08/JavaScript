let display = document.getElementById("display");
let resultBox = document.getElementById("result");

// ✅ Append number/operator
function appendValue(value) {
  display.innerHTML += value;
}

// ✅ Clear display
function clearDisplay() {
  display.innerHTML = "";
  resultBox.innerHTML = "";
}

// ✅ Arithmetic Calculator using eval (but wrapped in UDF + switch for learning)
function calculate() {
  let exp = display.innerHTML;
  try {
    let result = eval(exp); // main arithmetic
    console.log(`Result of ${exp} = ${result}`);
    resultBox.innerHTML = `Result: ${result}`;
    display.innerHTML = result;
  } catch {
    alert("Invalid Expression!");
  }
}

// ✅ Square Calculator
function calcSquare() {
  let num = Number(display.innerHTML);
  let square = squareFunc(num);
  console.log(`Square of ${num} = ${square}`);
  resultBox.innerHTML = `Square: ${square}`;
}

// UDF with return
function squareFunc(n) {
  return n * n;
}

// ✅ Cube Calculator
function calcCube() {
  let num = Number(display.innerHTML);
  let cube = cubeFunc(num);
  console.log(`Cube of ${num} = ${cube}`);
  resultBox.innerHTML = `Cube: ${cube}`;
}

// UDF with return
function cubeFunc(n) {
  return n * n * n;
}

// ✅ Factorial Calculator (Recursive)
function calcFactorial() {
  let num = Number(display.innerHTML);
  if (num < 0) {
    alert("Factorial not possible for negative numbers!");
    return;
  }
  let fact = factorial(num);
  console.log(`Factorial of ${num} = ${fact}`);
  resultBox.innerHTML = `Factorial: ${fact}`;
}

// Recursive UDF
function factorial(n) {
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}

// ✅ Even/Odd Checker
function checkEvenOdd() {
  let num = Number(display.innerHTML);
  let message = evenOdd(num);
  console.log(message);
  resultBox.innerHTML = message;
}

// UDF with return value
function evenOdd(n) {
  return (n % 2 === 0) ? `${n} is Even` : `${n} is Odd`;
}

