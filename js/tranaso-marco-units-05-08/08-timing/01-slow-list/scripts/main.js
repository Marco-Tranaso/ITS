/**
 * @author Marco Tranaso
 * @description This function prints each element from the 'elementi' array at intervals of 1 second using setInterval.
 * It stops when all elements are printed.
 */

/**
 * Prints each element from the 'elementi' array at intervals of 1 second.
 * @function stampaConInterval
 * @returns {void} 
 * @example
 * // Calls stampaConInterval to print each item from the 'elementi' array at 1-second intervals
 * stampaConInterval();
 */
function stampaConInterval() {
    let indice = 0;
    let intervallo = setInterval(function() {
        console.log(elementi[indice]);
        indice++;

        if (indice >= elementi.length) {
            clearInterval(intervallo);
        }
    }, 1000);
}

/**
 * @author Marco Tranaso
 * @description This function prints each element from the 'elementi' array at intervals of 1 second using setTimeout.
 * It recursively calls itself to print the next element until all are printed.
 */

/**
 * Prints each element from the 'elementi' array at intervals of 1 second using recursion with setTimeout.
 * @function stampaConTimeout
 * @param {number} indice - The current index of the element to be printed from the 'elementi' array.
 * @returns {void}
 * @example
 * // Starts printing from the first element in the 'elementi' array
 * stampaConTimeout(0);
 */
function stampaConTimeout(indice) {
    if (indice < elementi.length) {
        setTimeout(function() {
            console.log(elementi[indice]);
            stampaConTimeout(indice + 1);
        }, 1000);
    }
}

// Call stampaConInterval to start the process
stampaConInterval();
