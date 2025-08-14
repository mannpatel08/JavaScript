// Fitness Suggestion System

let age = parseInt(prompt("Enter your age:"));
let weight = parseFloat(prompt("Enter your weight (in kg):"));
let idealWeight;

if (age < 20) {
    idealWeight = 50;
} else if (age <= 40) {
    idealWeight = 65;
} else {
    idealWeight = 60;
}

if (weight === idealWeight) {
    alert("You are fit.");
} else if (weight < idealWeight) {
    alert("You are underweight for your age. Consider a healthy diet.");
} else {
    alert("You are overweight for your age. Consider exercise and a balanced diet.");
}


// Monthly Budget Planner

let monthlyIncome = parseFloat(prompt("Enter your monthly income (₹):"));

if (monthlyIncome < 10000) {
    alert("Spend cautiously and save more!");
} else if (monthlyIncome >= 10000 && monthlyIncome < 30000) {
    alert("Balanced budget!");
} else if (monthlyIncome >= 30000) {
    alert("You can consider investing.");
}


// Mobile Data Usage Alert

let dataUsed = parseFloat(prompt("Enter total data used in a month (GB):"));

if (dataUsed < 5) {
    alert("Low usage");
} else if (dataUsed >= 5 && dataUsed < 15) {
    alert("Normal usage");
} else if (dataUsed >= 15) {
    alert("Heavy usage, consider a bigger plan");
}


// Change Password Logic 

let savedOldPassword = "admin123"; 

let oldPass = prompt("Enter your old password:");
let newPass = prompt("Enter your new password:");
let confirmPass = prompt("Confirm your new password:");

if (oldPass !== savedOldPassword) {
    alert("Old password is incorrect.");
} else if (newPass !== confirmPass) {
    alert("Passwords do not match.");
} else {
    alert("Password changed successfully.");
}
