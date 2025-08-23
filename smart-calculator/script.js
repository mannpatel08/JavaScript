// ===== User Defined Functions (UDFs) =====

// With parameters & return
function add(a, b) {
    return a + b;
  }
  
  // With parameters & no return
  function subtract(a, b) {
    alert(`Subtraction = ${a - b}`);
  }
  
  // Without parameters & return
  function multiply() {
    let x = Number(prompt("Enter first number:"));
    let y = Number(prompt("Enter second number:"));
    return x * y;
  }
  
  // Factorial using loop (recursion alternative not needed here)
  function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
      fact *= i;
    }
    return fact;
  }
  
  // ===== DOM Handling =====
  const display = document.getElementById("ans-display");
  const buttons = document.querySelectorAll("button");
  
  let currentInput = "";
  
  // Handle button clicks
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
        try {
          let expr = currentInput.replace(/÷/g, "/").replace(/x/g, "*");
          display.value = eval(expr); // arithmetic operator
          currentInput = display.value;
        } catch {
          display.value = "Error";
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
        display.value = factorial(n); // UDF + for loop
        currentInput = display.value;
      } 
      else if (val === "Even/Odd") {
        let n = Number(display.value);
        // comparison + logical operators
        if (n > 0 && n % 2 === 0) {
          alert(`${n} is Positive & Even`);
        } else if (n > 0 && n % 2 !== 0) {
          alert(`${n} is Positive & Odd`);
        } else if (n < 0 || n === 0) {
          alert(`${n} is Negative or Zero`);
        }
      } 
      else {
        currentInput += val;
        display.value = currentInput;
      }
    });
  });
  
  // ===== Loop Demonstrations (DOM Output via console) =====
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
  
  // Greet (UDF without return)
  greet();
  