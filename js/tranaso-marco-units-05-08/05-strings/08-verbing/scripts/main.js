// Author: Marco Tranaso

/**
 * @function verbing
 * @param {string} string - The string to be modified.
 * @returns {string} - A new string that either adds 'ly' if it ends with 'ing', adds 'ing' if the string is longer than 3 characters, or returns the original string.
 * 
 * This function modifies the given string based on its content:
 * - If the string ends with 'ing', it appends 'ly' to the string.
 * - If the string is longer than 3 characters and does not end with 'ing', it appends 'ing'.
 * - If the string is shorter than or equal to 3 characters, it returns the original string.
 */
function verbing(string) {
    if (string.endsWith("ing")) {
        return string + "ly";
    }
    if (string.length > 3) {
        return string + "ing";
    }
    else {
        return string;
    }
}

// Example calls
console.log(verbing("swim"));     // Output: "swimming"
console.log(verbing("swimming")); // Output: "swimmingly"
console.log(verbing("go"));       // Output: "go"
