// Fitness Suggestion System
// Covers: Variables, Data Types, prompt(), alert(), if-else, Comparison & Logical Operators, String validation

// Variables to store inputs
let ageInput = prompt("Enter your age (years):");
let weightInput = prompt("Enter your weight (kg):");

// Validation: check if inputs are numbers and not empty
if (ageInput === "" || weightInput === "") {
    alert("Age and Weight cannot be empty.");
} else if (isNaN(ageInput) || isNaN(weightInput)) {
    alert("Please enter valid numbers for Age and Weight.");
} else {
    // Convert to proper data types
    let age = parseInt(ageInput, 10);
    let weight = parseFloat(weightInput);

    // Ideal weight range logic (simple example, not medical advice)
    let minWeight = 0;
    let maxWeight = 0;

    if (age >= 18 && age <= 25) {
        maxWeight = 70;
        minWeight = 55;
    } else if (age >= 26 && age <= 40) {
        minWeight = 60;
        maxWeight = 75;
    } else if (age >= 41 && age <= 60) {
        minWeight = 60;
        maxWeight = 78;
    } else if (age > 60) {
        minWeight = 55;
        maxWeight = 72;
    } else {
        minWeight = 20; // for very young age
        maxWeight = 50;
    }

    // Compare weight to ideal range
    if (weight >= minWeight && weight <= maxWeight) {
        alert("You are fit for your age!");
        console.log("You are fit for your age!");
    } else if (weight < minWeight) {
        alert("You are underweight for your age. Consider a healthy diet.");
        console.log("You are underweight for your age. Consider a healthy diet.");
    } else if (weight > maxWeight) {
        alert("You are overweight for your age. Consider regular exercise and a balanced diet.");
        console.log("You are overweight for your age. Consider regular exercise and a balanced diet.");
    }
}
