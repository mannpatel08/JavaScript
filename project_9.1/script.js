let choice;
let orderChoice;
let subtotal = 0;
let grandTotal =0;
let gst = 0;
let discount = 0;
let password = "1234"


do{
    console.log(`---------Good Stuff-----------`);
    console.log(`1. Place Order`);
    console.log(`2. View Bill`);
    console.log(`3. Apply Discount`);
    console.log(`4. Change Password`);
    console.log(`0. Exit`);

    choice = parseInt(prompt(`Enter Your Choice : `));

        if(choice == 1){
            
            do{
                console.log(`Menu Card`);
                console.log(`1. Coffee (₹50)`);
                console.log(`2. Tea (₹30)`);
                console.log(`3. Sandwich (₹80)`);
                console.log(`4. Pastry (₹100)`);
                console.log(`0. Done Ordering`);

                orderChoice = parseInt(prompt(`Enter Your Choice ; `));

                if(orderChoice == 1){
                    subtotal += 50 
                    console.log(`You ordered Coffee. Price: ₹50 \n Current Total: ₹" + ${subtotal}`);
                }
                if(orderChoice == 2){
                    subtotal += 30 
                    console.log(`You ordered Tea. Price: ₹30 \n Current Total: ₹" + ${subtotal}`);
                }
                if(orderChoice == 3){
                    subtotal += 80 
                    console.log(`You ordered Sandwich. Price: ₹80 \n Current Total: ₹" + ${subtotal}`);
                }
                if(orderChoice == 4){
                    subtotal += 100 
                    console.log(`You ordered Pastry. Price: ₹100 \n Current Total: ₹" + ${subtotal}`);
                }
            }while(orderChoice != 0)
        }
        else if(choice == 2){
            gst = subtotal * 0.05;
            grandTotal = subtotal +gst;
            console.log(`SubTotal : ${subtotal}`);
            console.log(`GST : ${gst}`);
            console.log(`GrandTotal : ${grandTotal}`);
        }
        else if(choice == 3){
            if(subtotal > 1000){
                discount = subtotal * 0.20;
            }else if(subtotal > 500){
                discount = subtotal * 0.10;
            }else{
                discount = 0;
            }

            grandTotal = (subtotal - discount) + gst;
            console.log(`SubTotal : ${subtotal}`);
            console.log(`Discount : -${discount}`);
            console.log(`GST : ${gst}`);
            console.log(`Final Bill : ${grandTotal}`);
            
        }
        else if (choice === 4) {
            let oldPass = prompt("Enter old password:");
            if (oldPass === password) {
                let newPass = prompt("Enter new password:");
                password = newPass;
                console.log("Password changed successfully.");
            } else {
                console.log("Incorrect old password.");
            }
    
        }
        else if (choice !== 0) {
            console.log("Invalid choice! Please try again.");
        }



}while(choice != 0)

    console.log(`Thank You For Ordering From The Good Stuff Cafe`);