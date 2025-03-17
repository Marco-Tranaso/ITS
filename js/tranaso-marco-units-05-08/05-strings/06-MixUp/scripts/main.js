// Author: Marco Tranaso

/**
 * @function mixUp
 * @param {string} str1 - The first string.
 * @param {string} str2 - The second string.
 * @returns {string} - A new string with the first characters of the two strings swapped.
 * 
 * This function swaps the first character of each string and concatenates the results with a space in between.
 */
function mixUp(str1, str2) {
    return str1.replace(str1.charAt(0), str2.charAt(0)) + " " + str2.replace(str2.charAt(0), str1.charAt(0));
}

// Example call
console.log(mixUp("mix", "pod")); // Output: "pix mod"
