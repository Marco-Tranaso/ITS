/**
 * @author Marco Tranaso
 * @description Displays the choices in the `top_choice` array with their respective ranks (1st, 2nd, 3rd, etc.).
 */

/**
 * @constant {Array} top_choice - An array containing the top choices in order.
 * @example ['rosso', 'cane', 'bibbia']
 */

/**
 * @function displayChoices
 * @description Iterates through the `top_choice` array and logs each choice along with its rank (e.g., 1st choice, 2nd choice).
 * 
 * @returns {void}
 */
for (let i = 0; i < top_choice.length; i++) {
    console.log(`My #${i + 1} choice is ${top_choice[i]}`); // Log each choice with its rank.
}
