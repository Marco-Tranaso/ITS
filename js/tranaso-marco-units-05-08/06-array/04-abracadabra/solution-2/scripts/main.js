/**
 * @author Marco Tranaso
 * @description Modifies a string by replacing the character at index 3 with "X" using the slice method.
 * The slice method extracts parts of the string and then concatenates them together.
 */

/**
 * @constant {string} string - The original string to be modified.
 */
let string = "Abracadabra";

/**
 * @description Slices the string to extract characters before index 3, replaces the character at index 3 with "X",
 * and then slices the string from index 4 onwards.
 * The result is a new string with the character at index 3 replaced by "X".
 * 
 * @function modifyString
 * @returns {void}
 */
console.log(string.slice(0, 3) + "X" + string.slice(4)); 
