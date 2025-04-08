/**
 * @author Marco Tranaso
 * @description Replaces the character at index 3 of the string with "X" using the `replace()` method.
 */

/**
 * @constant {string} string - The original string to be modified.
 */
let string = "Abracadabra";

/**
 * @description Replaces the character at index 3 in the string with "X".
 * The `replace()` method is used to find and replace the character at the specified index.
 * 
 * @function modifyString
 * @returns {void}
 */
let new_str = string.replace(string[3], "X"); // Replace the character at index 3 with "X".

console.log(new_str); // Output the modified string.
