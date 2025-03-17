// Author: Marco Tranaso

/**
 * Reverses the given string and returns the result.
 * 
 * @param {string} string - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function printReverse(string){
    return string.split("").reverse().join("");
}

let string = "foobar";
console.log(printReverse(string));

// version 2

/**
 * Reverses the given string manually without using built-in methods.
 * 
 * @param {string} str - The string to be reversed.
 * @returns {string} - The reversed string.
 */
function reverse(str) {
    let reversedStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversedStr += str[i];
    }
    
    return reversedStr;
}

console.log(reverse("foobar"));
