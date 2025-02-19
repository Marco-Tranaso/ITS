function calculateSupply(age, amountPerDay) {
    let max_age=100
    let yearsLeft = max_age - age;
    let totalAmount = Math.round(amountPerDay * 365 * yearsLeft);
    let totalLiters = (totalAmount / 1000).toFixed(2);
    console.log(`You will need ${totalAmount} cups of coffee (${totalLiters} liters) to last you until the age of ${max_age}.`);
}
calculateSupply(25,0.3);  
calculateSupply(40,0.5);  
calculateSupply(60,0.2);  