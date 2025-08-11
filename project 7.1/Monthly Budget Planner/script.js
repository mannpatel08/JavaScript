let salary = parseFloat(prompt(`Enter Your Salary : `));

if(salary <= 10000){
    console.log("Spend Your Money Cautiously and Invest More....");
} 
else if (salary >= 10000 && salary <= 30000) {
    console.log("Moderate Budget");
} 
else {
    console.log("Your income is great! Consider investing in SIPs, FD's, Mutral funds.");
}