function money(amount){
    if (amount <= 1) {
        return `money(${amount}) ${amount} dollar`;
    }
    else if (amount > 1e6){
        return `money(${amount}) ${amount} dollars ;)`;
    }
    else{
        return `money(${amount}): ${amount} dollars`;
    }
}
let amount;
console.log(money(1));
console.log(money(10));
console.log(money(1000001));