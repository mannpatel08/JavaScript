let age = parseInt(prompt("Enter your age: "));
let weight = parseFloat(prompt("Enter your weight: ")); 

if (age < 18) {
    if (weight >= 45 && weight <= 65) {
        console.log("You are fit for your age group");
    } else if (weight < 45) {
        console.log("You are underweight.");
    } else {
        console.log("You are overweight.");
    }

} else if (age >= 18 && age <= 40) {
    if (weight >= 55 && weight <= 75) {
        console.log("You are fit for your age group");
    } else if (weight < 55) {
        console.log("You are underweight.");
    } else {
        console.log("You are overweight.");
    }
    
} else {
    if (weight >= 50 && weight <= 70) {
        console.log("You are fit for your age group");
    } else if (weight < 50) {
        console.log("You are underweight.");
    } else {
        console.log("You are overweight.");
    }
}