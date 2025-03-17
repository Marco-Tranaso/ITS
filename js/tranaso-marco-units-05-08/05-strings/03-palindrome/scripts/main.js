// Author: Marco Tranaso

/**
 * Checks if a given string is a palindrome.
 * A palindrome is a word, phrase, or sequence that reads the same backwards as forwards.
 * 
 * @param {string} string1 - The string to check for palindrome.
 * @returns {boolean} - Returns true if the string is a palindrome, false otherwise.
 */
function isPalindrome(string1){
    let string2 = string1.split("").reverse().join(""); // Reverse the string
    return string2 == string1; // Check if reversed string is equal to the original string
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("madame")); // false
