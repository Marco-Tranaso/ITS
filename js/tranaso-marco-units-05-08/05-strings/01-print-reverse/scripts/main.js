/**
 * Prints the reverse of the given string.
 * 
 * @param {string} string - The string to be reversed.
 */
function printReverse(string) {
    console.log(string.split("").reverse().join(""));
}

let string = "foobar";
printReverse(string);

// version 2

/**
 * Returns the reversed version of the given string.
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
