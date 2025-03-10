/**
 * Author: Marco Tranaso
 */

/**
 * Performs various calculations based on the input number and logs the results.
 * The calculations include halving the number, squaring it, calculating the area of a circle, 
 * and finding the percentage of the area relative to the square.
 * @param {number} num - The number used for the calculations.
 * @example
 * // Outputs:
 * // The half number is 1.5
 * // The squared number is 2.25
 * // The area of the circle is 15.707963267949466
 * // The percentage area is of the squared result is 700.0000000000001%
 */
function Calculator(num) {
    let half_num = num / 2;
    let square_num = half_num ** 2;
    let area_circle = (square_num ** 2) * Math.PI;
    let percentage_num = (area_circle / square_num) * 100;

    console.log(`The half number is ${half_num}`);
    console.log(`The squared number is ${square_num}`);
    console.log(`The area of the circle is ${area_circle}`);
    console.log(`The percentage area is of the squared result is ${percentage_num}%`);
}

Calculator(3);
