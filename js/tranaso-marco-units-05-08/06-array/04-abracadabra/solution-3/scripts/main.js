/**
 * @author Marco Tranaso
 * @description Modifies a string by replacing the character at index 3 with "X" using the `Array.from()` method
 * to convert the string into an array, then modifying the array with `splice()`, and finally joining the array back into a string.
 */

/**
 * @constant {string} string - The original string to be modified.
 */
let string = "Abracadabra";

/**
 * @description Converts the string into an array of characters, replaces the character at index 3 with "X",
 * and then converts the array back into a string.
 * The result is a new string where the character at index 3 is replaced by "X".
 * 
 * @function modifyString
 * @returns {void}
 */
let string_to_array = Array.from(string); // Convert the string to an array of characters.
string_to_array.splice(3, 1, "X"); // Replace the character at index 3 with "X".
let new_str = string_to_array.join(""); // Join the array back into a string.
console.log(new_str); // Output the modified string.
