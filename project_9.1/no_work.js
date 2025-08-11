// Smart Café Billing System
// ==========================

// Initial values
let password = "1234";
let choice;
let subtotal = 0;
let gst = 0;
let grandTotal = 0;
let discount = 0;
let finalBill = 0;
let totalItemsSold = 0;
let highestPrice = 0;
let lowestPrice = 0;
let firstItem = true; // for lowest price calculation

do {
    choice = parseInt(prompt(
        "=== Smart Café Billing System ===\n" +
        "1. Place Order\n" +
        "2. View Bill\n" +
        "3. Apply Discount\n" +
        "4. Change Café Password\n" +
        "5. View Café Report\n" +
        "0. Exit\n" +
        "Enter your choice:"
    ));

    if (choice === 1) {
        let orderChoice;
        do {
            orderChoice = parseInt(prompt(
                "=== Café Menu ===\n" +
                "1. Coffee (₹50)\n" +
                "2. Tea (₹30)\n" +
                "3. Sandwich (₹80)\n" +
                "4. Pastry (₹100)\n" +
                "0. Done Ordering\n" +
                "Enter your choice:"
            ));

            if (orderChoice === 1) {
                subtotal += 50;
                totalItemsSold++;
                if (firstItem) { lowestPrice = 50; firstItem = false; }
                if (50 > highestPrice) highestPrice = 50;
                if (50 < lowestPrice) lowestPrice = 50;
                console.log("You ordered Coffee. Price: ₹50\nCurrent Total: ₹" + subtotal);
            } else if (orderChoice === 2) {
                subtotal += 30;
                totalItemsSold++;
                if (firstItem) { lowestPrice = 30; firstItem = false; }
                if (30 > highestPrice) highestPrice = 30;
                if (30 < lowestPrice) lowestPrice = 30;
                console.log("You ordered Tea. Price: ₹30\nCurrent Total: ₹" + subtotal);
            } else if (orderChoice === 3) {
                subtotal += 80;
                totalItemsSold++;
                if (firstItem) { lowestPrice = 80; firstItem = false; }
                if (80 > highestPrice) highestPrice = 80;
                if (80 < lowestPrice) lowestPrice = 80;
                console.log("You ordered Sandwich. Price: ₹80\nCurrent Total: ₹" + subtotal);
            } else if (orderChoice === 4) {
                subtotal += 100;
                totalItemsSold++;
                if (firstItem) { lowestPrice = 100; firstItem = false; }
                if (100 > highestPrice) highestPrice = 100;
                if (100 < lowestPrice) lowestPrice = 100;
                console.log("You ordered Pastry. Price: ₹100\nCurrent Total: ₹" + subtotal);
            } else if (orderChoice !== 0) {
                console.log("Invalid menu choice!");
            }

        } while (orderChoice !== 0);

    } else if (choice === 2) {
        gst = subtotal * 0.05;
        grandTotal = subtotal + gst;
        console.log("Subtotal: ₹" + subtotal);
        console.log("GST (5%): ₹" + gst);
        console.log("Grand Total: ₹" + grandTotal);
        document.write("<p>Subtotal: ₹" + subtotal + "<br>GST (5%): ₹" + gst + "<br>Grand Total: ₹" + grandTotal + "</p>");

    } else if (choice === 3) {
        if (subtotal > 1000) {
            discount = subtotal * 0.20;
        } else if (subtotal > 500) {
            discount = subtotal * 0.10;
        } else {
            discount = 0;
        }
        finalBill = subtotal - discount;
        console.log("Original: ₹" + subtotal);
        console.log("Discount: ₹" + discount);
        console.log("Final Bill: ₹" + finalBill);
        document.write("<p>Original: ₹" + subtotal + "<br>Discount: ₹" + discount + "<br>Final Bill: ₹" + finalBill + "</p>");

    } else if (choice === 4) {
        let oldPass = prompt("Enter old password:");
        if (oldPass === password) {
            let newPass = prompt("Enter new password:");
            password = newPass;
            console.log("Password changed successfully.");
        } else {
            console.log("Incorrect old password.");
        }

    } else if (choice === 5) {
        let avgPrice = (totalItemsSold > 0) ? (subtotal / totalItemsSold) : 0;
        console.log("Total Items Sold: " + totalItemsSold);
        console.log("Highest Price Item: ₹" + highestPrice);
        console.log("Lowest Price Item: ₹" + lowestPrice);
        console.log("Average Price: ₹" + avgPrice.toFixed(2));
        document.write("<p>Total Items Sold: " + totalItemsSold +
            "<br>Highest Price Item: ₹" + highestPrice +
            "<br>Lowest Price Item: ₹" + lowestPrice +
            "<br>Average Price: ₹" + avgPrice.toFixed(2) + "</p>");

    } else if (choice !== 0) {
        console.log("Invalid choice! Please try again.");
    }

} while (choice !== 0);

console.log("Thank you for using Smart Café Billing System!");