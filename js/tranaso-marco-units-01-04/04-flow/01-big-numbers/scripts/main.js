// Author: Marco Tranaso

/**
 * @function greaterNum
 * @param {number} num1 - The first number to compare.
 * @param {number} num2 - The second number to compare.
 * Compares two numbers and logs the greater one.
 */
function greaterNum(num1, num2) {
    if (num1 > num2) {
        console.log(`The greater number of ${num1} and ${num2} is ${num1}`);
    } else {
        console.log(`The greater number of ${num1} and ${num2} is ${num2}`);
    }
}

greaterNum(5, 10);
greaterNum(3, 7);
