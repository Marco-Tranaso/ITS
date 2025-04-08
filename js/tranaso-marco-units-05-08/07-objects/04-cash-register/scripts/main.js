/**
 * @author Marco Tranaso
 * @description This function calculates the total price of items in a shopping cart object.
 */

/**
 * @typedef {Object} ShoppingCart
 * @property {Object.<string, number>} items - An object where the keys are item names (strings) and the values are their prices (numbers).
 * @example 
 * {
 *   "apple": 1.2,
 *   "banana": 0.5,
 *   "orange": 0.8
 * }
 */

/**
 * Calculates the total price of all items in the shopping cart.
 * @function cashRegister
 * @param {ShoppingCart} cart - The shopping cart object containing item names and their prices.
 * @returns {number} The total price of all items in the cart.
 * @example
 * const cart = {
 *   "apple": 1.2,
 *   "banana": 0.5,
 *   "orange": 0.8
 * };
 * const total = cashRegister(cart);
 * console.log(total); // Output: 2.5
 */
function cashRegister(cart) {
    let total = 0;

    // Loop through each item in the cart and add the price to the total
    for (let item in cart) {
        total += cart[item];
    }

    return total;
}

// Example usage:
const cart = {
    "apple": 1.2,
    "banana": 0.5,
    "orange": 0.8
};

console.log(cashRegister(cart)); // Output: 2.5
