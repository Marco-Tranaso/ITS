// Author: Marco Tranaso

/**
 * @function money
 * @param {number} amount - The amount of money.
 * @returns {string} - A string representing the amount of money and the appropriate unit (dollar or dollars).
 * 
 * This function returns a string based on the amount of money:
 * - If the amount is less than or equal to 1, it will return 'dollar'.
 * - If the amount is greater than 1 million, it will add a special message.
 * - Otherwise, it will return the number with 'dollars'.
 */
function money(amount) {
    if (amount <= 1) {
        return `money(${amount}) ${amount} dollar`;
    }
    else if (amount > 1e6) {
        return `money(${amount}) ${amount} dollars ;)`;
    }
    else {
        return `money(${amount}): ${amount} dollars`;
    }
}

/**
 * @function convertDollars
 * @param {number} amount - The amount in dollars to be converted.
 * @returns {string} - A string representing the amount in dollars and its equivalent in euros.
 * 
 * This function converts an amount in dollars to euros using a fixed conversion rate (1 USD = 1.074 EUR).
 */
function convertDollars(amount) {
    return `money(${amount}): ${amount} dollars are ${(amount / 1.074).toFixed(2)} euros`;
}

// Example calls
let amount;
console.log(money(1));          // money(1): 1 dollar
console.log(money(10));         // money(10): 10 dollars
console.log(money(1000001));    // money(1000001): 1000001 dollars ;)
console.log(convertDollars(10)); // money(10): 10 dollars are 9.31 euros
