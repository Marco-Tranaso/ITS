/**
 * @author Marco Tranaso
 * @description This function mimics the behavior of `setInterval`, executing a callback at specified intervals, but only for a maximum of 15 times.
 */

/**
 * Mimics the behavior of `setInterval` but only runs the callback a maximum of 15 times.
 * @function mySetInterval
 * @param {Function} callback - The function to be executed at each interval.
 * @param {number} delay - The delay (in milliseconds) between each execution of the callback.
 * @example
 * mySetInterval(function() {
 *   console.log("Esecuzione numero:", new Date().toLocaleTimeString());
 * }, 1000);
 */
function mySetInterval(callback, delay) {
    let count = 0;

    function doIt() {
        if (count < 15) {
            callback();
            count++;
            setTimeout(doIt, delay);
        }
    }

    doIt();
}

// Example usage:
mySetInterval(function() {
    console.log("Esecuzione numero:", new Date().toLocaleTimeString());
}, 1000);
