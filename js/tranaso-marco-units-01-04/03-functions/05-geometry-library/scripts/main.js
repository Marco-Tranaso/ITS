// Author: Marco Tranaso

/**
 * @function calcCircumference
 * @param {number} radius - The radius of the circle.
 * Calculates the circumference of a circle given its radius and logs the result.
 */
function calcCircumference(radius) {
    let circumference = radius * 2 * Math.PI;
    console.log(`The circumference is ${circumference}`);
}
calcCircumference(5);
calcCircumference(10);
calcCircumference(15);

/**
 * @function calcArea
 * @param {number} radius - The radius of the circle.
 * Calculates the area of a circle given its radius and logs the result.
 */
function calcArea(radius) {
    let area = (radius ** 2) * Math.PI;
    console.log(`The area is ${area}`);
}
calcArea(5);
calcArea(10);
calcArea(15);
