/**
 * @author Marco Tranaso
 * @description This function prints a message indicating that it does something useful.
 */

/**
 * Prints a message to the console indicating the function does something useful.
 * @function useful
 * @returns {void} 
 * @example
 * // Calls useful to print a message
 * useful();
 */
function useful() {
    console.log("This function does something useful!");
}

/**
 * @author Marco Tranaso
 * @description This function sets a timeout to call the useful function after 10 seconds, 
 * and cancels the timeout after 5 seconds using clearTimeout.
 */

/**
 * Cancels the scheduled 'useful' function call after 5 seconds.
 * @function cancelUseful
 * @returns {void}
 * @example
 * // Calls cancelUseful after 5 seconds to stop the 'useful' function from executing
 * setTimeout(cancelUseful, 5000);
 */
function cancelUseful() {
    clearTimeout(id);
    console.log("Function cancelled");
}

// Set a timeout to call the useful function after 10 seconds
let id = setTimeout(useful, 10000);

// Set a timeout to cancel the useful function after 5 seconds
setTimeout(cancelUseful, 5000);
