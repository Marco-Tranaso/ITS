// Author: Marco Tranaso

/**
 * @function aContainsb
 * @param {string} str1 - The main string to search within.
 * @param {string} str2 - The substring to search for.
 * @returns {boolean} - Returns `true` if `str1` contains `str2`, otherwise returns `false`.
 * 
 * This function checks if the second string `str2` is contained within the first string `str1` using the `includes` method.
 */
function aContainsb(str1, str2) {
    if (str1.includes(str2)) {
        return true;
    } else {
        return false;
    }
}

console.log(aContainsb("Another hello world", "hell"));  // Output: true
