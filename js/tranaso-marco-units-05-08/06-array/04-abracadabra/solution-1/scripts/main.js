/**
 * @author Marco Tranaso
 * @description Modifies a specific character in a string by replacing it with another character.
 * In this case, it replaces the character at index 3 with "X".
 */

/**
 * @constant {string} string - The original string to be modified.
 */
let string = "Abracadra";

/**
 * @description Converts the string into an array of characters.
 * Splits the original string into individual characters.
 * 
 * @constant {Array} new_string - Array of characters from the original string.
 */
let new_string = string.split(""); // Splitting the string into an array of characters

/**
 * @description Replaces the character at index 3 of the array with the character "X".
 * Modifies the character at index 3 of the array.
 * 
 * @constant {Array} new_string - Modified array with the character at index 3 replaced.
 */
new_string[3] = "X"; // Replacing the character at index 3 with "X"

/**
 * @description Joins the array of characters back into a string.
 * Joins the array into a string after modifying the character at index 3.
 * 
 * @constant {string} new_string - The modified string obtained by joining the array of characters.
 */
new_string = new_string.join(""); // Joining the array back into a string

/**
 * @description Logs the modified string to the console.
 * Outputs the final string with the modified character.
 * 
 * @function logModifiedString
 * @returns {void}
 */
console.log(new_string); // Logs the modified string to the console
