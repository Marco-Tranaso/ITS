// Author: Marco Tranaso

/**
 * Capitalizes the first letter of the first word in a string.
 * 
 * @param {string} string - The string to capitalize.
 * @returns {string} - The string with the first letter capitalized.
 */
function capital(string){
    return string.charAt(0).toUpperCase() + string.slice(1); // Capitalizes the first character
}

console.log(capital("hello world")); // Hello world

/**
 * Capitalizes the first letter of every word in a given string.
 * 
 * @param {string} str - The string to capitalize.
 * @returns {string} - The string with the first letter of each word capitalized.
 */
function capitalAllWords(str) {
    let words = str.split(" "); // Split the string into an array of words
    let result = ""; // Initialize an empty string to store the result
    
    // Iterate over each word in the array
    for (let i = 0; i < words.length; i++) {
        result += words[i].charAt(0).toUpperCase() + words[i].slice(1); // Capitalize the first letter of each word
        result += " "; // Add a space after each capitalized word
    }
    
    return result.trim(); // Trim any extra space at the end
}

console.log(capitalAllWords("hello world")); // Hello World
