// Author: Marco Tranaso

/**
 * @function notBad
 * @param {string} string - The input string to check and modify.
 * @returns {void} - This function does not return a value but logs the modified string or the original string.
 * 
 * This function checks the input string for the presence of the words "not" and "bad" and modifies the string accordingly:
 * - If "not" is found before "bad", it modifies the phrase by replacing everything after "not" and "bad" with "is good".
 * - If "not" is not found, it returns the original string.
 * - If "not" is not before "bad", the string remains unchanged.
 */
function notBad(string) {
    let stringa_normale = string;

    // If "not" is not found in the string, print the original string
    if (string.search("not") == -1) {
        console.log(stringa_normale);
    }
    // If "not" appears before "bad", modify the string to "is good"
    else if (string.search("not") < string.search("bad")) {
        let stringa1 = string.split(" is ");
        console.log(stringa1[0] + " " + "is good");
    }
}

// Example calls
notBad("This dinner is not that bad");  // Output: "This dinner is good"
notBad("This dinner is not so bad");    // Output: "This dinner is good"
notBad("This dinner is bad");           // Output: "This dinner is bad"
notBad("The breakfast was so bad");    // Output: "The breakfast was so bad"
