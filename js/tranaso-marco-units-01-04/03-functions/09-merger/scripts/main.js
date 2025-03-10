/**
 * Author: Marco Tranaso
 */

/**
 * Merges two values by adding them if they are both numbers or both strings.
 * Returns null if the types do not match.
 * @param {number|string} a - The first value to merge (either a number or a string).
 * @param {number|string} b - The second value to merge (either a number or a string).
 * @returns {number|string|null} The sum of the two values if they are both numbers or strings, otherwise null.
 * @example
 * // Outputs: 15
 * console.log(merger(5, 10));
 * @example
 * // Outputs: "Hello, World!"
 * console.log(merger("Hello, ","World!"));
 */
function merger(a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    if (typeof a === "string" && typeof b === "string") {
        return a + b;
    }
    return null;
}

console.log(merger(5, 10));        
console.log(merger("Hello, ","World!"));  
console.log(merger(3, "testo"));    
console.log(merger("123", "456")); 
console.log(merger(true, false));  
console.log(merger(7.5, 2.5));        
