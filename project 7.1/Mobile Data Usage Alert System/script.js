let data = parseFloat(prompt("Enter data used this month: "));

if (data < 5) {
    console.log("Low usage.");
} else if (data >= 5 && data <= 15) {
    console.log("Normal usage.");
} else {
    console.log("Heavy usage, consider a bigger plan.");
}