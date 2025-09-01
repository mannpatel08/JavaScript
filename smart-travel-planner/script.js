let destination = [];
let destinationList = parseInt(prompt("how many destination you want(3 to 5):-"));
for (let i = 0; i < destinationList; i++) {
    let place = prompt(`Enter your destination ${i + 1}`);
    destination.push(place);
}

let budget = parseInt(prompt("Enetr your travel budget:-"));
let journey = "";

if (budget < 10000) {
    journey = ("Plan a short domestic trip.");
}
else if (budget <= 50000) {
    journey = ("You can plan a long domestic trip.");
}
else {
    journey = "International trip possible!"
}

let days = parseInt(prompt("Enetr your travel days:-"));
let travelDays = "";

if (days < 3) {
    travelDays = ("Weekend Getaway.");
}
else if (days <= 7) {
    travelDays = ("Perfect Holiday Trip.");
}
else {
    travelDays = "Extended Vacation!"
}

const hotelSuggestion = (budget, days) => {
    let perDay =( budget / days);

    if (perDay < 2000) {
        return "Budget Hotels.";
    }
    else if (perDay >= 2000 && perDay <= 5000) {
        return "Mid-range Hotels.";
    }
    else {
        return "Luxury Hotels.";
    }
}

let hotelSuggest = hotelSuggestion (budget , days);

document.write(`Destinations Entered: [${destination.join(", ")}]<br>`);
document.write(`Total Budget: ₹${budget}<br>`);
document.write(`Days Planned: ${days}<br>`);
document.write(`Trip Type: ${travelDays}<br>`);
document.write(`Hotel Suggestion: ${hotelSuggest}<br>`);
document.write(`Travel Summary: ${journey}<br>`);
