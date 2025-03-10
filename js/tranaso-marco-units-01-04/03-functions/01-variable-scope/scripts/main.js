/**
 * Author: Marco Tranaso
 */

/**
 * Adds a local number to the global number and logs the details.
 * @param {number} localNumber - The local number to add to the global number.
 * @returns {number} The sum of the global number and the local number.
 * @example
 * // Outputs: "Global number 10", "Local number 5", "Sum 15"
 */
function addNumbers(localNumber) {
    let sum = globalNumber + localNumber;
    console.log(`Global number ${globalNumber}`);
    console.log(`Local number ${localNumber}`);
    console.log(`Sum ${sum}`);
    return sum;
}

addNumbers(5);  
addNumbers(15); 
addNumbers(20);  
