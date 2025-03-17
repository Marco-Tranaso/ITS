// Author: Marco Tranaso

/**
 * @function fixStart
 * @param {string} text - The string to be modified.
 * @returns {string} - A new string where the first character is preserved and all occurrences of 'a' are replaced by '*' in the remaining part of the string.
 * 
 * This function replaces all occurrences of the letter 'a' in the string (except for the first character) with asterisks ('*').
 */
function fixStart(text) {
    let withoutFirstChar = text.slice(1);
    return text.charAt(0) + withoutFirstChar.replaceAll(text.charAt(0), "*");
}

// Example call
console.log(fixStart("babble")); // Output: "ba**le"
