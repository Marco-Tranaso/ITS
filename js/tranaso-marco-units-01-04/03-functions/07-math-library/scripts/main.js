// Author: Marco Tranaso

/**
 * @function squareNumber
 * @param {number} number - The number to be squared.
 * Squares a given number and logs the result.
 */
function squareNumber(number) {
    let number_squared = number ** 2;
    console.log(`The result of squaring the ${number} is ${number_squared}`);
}
squareNumber(2);

/**
 * @function halfNumber
 * @param {number} number - The number to be halved.
 * Halves a given number and logs the result.
 */
function halfNumber(number) {
    let half_number = number / 2;
    console.log(`The result of the half number of ${number} is ${half_number}`);
}
halfNumber(2);

/**
 * @function percentOf
 * @param {number} n1 - The part number to calculate the percentage for.
 * @param {number} n2 - The whole number to calculate the percentage against.
 * Calculates what percentage `n1` is of `n2` and logs the result.
 */
function percentOf(n1, n2) {
    let percentage = (n1 / n2) * 100;
    console.log(`${n1} is ${percentage}% of ${n2}`);
}
percentOf(2, 4);

/**
 * @function areaOfCircle
 * @param {number} radius - The radius of the circle.
 * Calculates the area of a circle given its radius and logs the result.
 */
function areaOfCircle(radius) {
    let area = (radius ** 2) * Math.PI;
    console.log(`The area for a circle with radius ${radius} is ${area.toFixed(2)}`);
}
areaOfCircle(2);
