// Author: Marco Tranaso

/**
 * @function groupCheck
 * @param {string} group - The string containing names separated by commas.
 * @param {string} name - The name to check against the group.
 * @returns {void} - Prints a message indicating whether the person is part of the group.
 * 
 * This function checks if a given name is part of a group and prints the result.
 */
function groupCheck(group, name) {
    // Converting the group string into an array of names
    let groupArray = group.split(", ");

    // Check if the name is part of the group
    console.log(`${name} ${groupArray.includes(name) ? "IS" : "is NOT"} part of the group`);
}

let group = "Mary, James and John";
let oldGuy = "James";
let newGuy = "Philip";

groupCheck(group, oldGuy);  // Output: James IS part of the group
groupCheck(group, newGuy);  // Output: Philip is NOT part of the group
