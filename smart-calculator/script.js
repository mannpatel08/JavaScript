function add(a, b) {
    return a + b;
  }
  function subtract(a, b) {
    alert(`Subtraction = ${a - b}`);
  }
  function multiply() {
    let x = Number(prompt("Enter first number:"));
    let y = Number(prompt("Enter second number:"));
    return x * y;
  }
  function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
  
  const display = document.getElementById("ans-display");
  const buttons = document.querySelectorAll("button");
  
  let currentInput = "";
  
  buttons.forEach(btn => {
    btn.addEventListener("click", () => {
      const val = btn.innerText;
  
      if (val === "C") {
        currentInput = "";
        display.value = "";
      } 
      else if (val === "DEL") {
        currentInput = currentInput.slice(0, -1);
        display.value = currentInput;
      } 
      else if (val === "=") {
        let expr = currentInput.replace(/x/g, "*"); 
      
        if (expr !== "") { 
          let result = eval(expr);
          display.value = result;
          currentInput = result.toString();
        } else {
          display.value = "Invalid Input";
          currentInput = "";
        }
      }
      
      else if (val === "x²") {
        display.value = Math.pow(Number(display.value), 2);
        currentInput = display.value;
      } 
      else if (val === "x³") {
        display.value = Math.pow(Number(display.value), 3);
        currentInput = display.value;
      } 
      else if (val === "n!") {
        let n = Number(display.value);
        display.value = factorial(n); 
        currentInput = display.value;
      } 
      else if (val === "Even/Odd") {
        let n = Number(display.value);
        if (n > 0 && n % 2 === 0) {
          display.value = `${n} is Even`;
        } else if (n > 0 && n % 2 !== 0) {
          display.value = `${n} is Odd`;
        } else if (n < 0 || n === 0) {
          display.value = `${n} is Zero`;
        }
        currentInput = display.value;
      }
      
      else {
        currentInput += val;
        display.value = currentInput;
      }
    });
  });
  

  console.log("For Loop → Numbers 1 to 5:");
  for (let i = 1; i <= 5; i++) {
    console.log(i);
  }
  
  console.log("While Loop → Numbers 5 to 1:");
  let j = 5;
  while (j > 0) {
    console.log(j);
    j--;
  }
  
  console.log("Do-While Loop → At least once:");
  let k = 0;
  do {
    console.log(`k = ${k}`);
    k++;
  } while (k < 3);
  