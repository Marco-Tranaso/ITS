/**
 * @author Marco Tranaso
 * @description Simulates a word guessing game where the user tries to guess letters of a word within a limited number of guesses.
 */

/**
 * @constant {Array} array1 - The array containing the correct letters of the word.
 * @constant {Array} array2 - The array representing the current guessed state of the word, initially filled with underscores.
 * @constant {number} max_guess - The maximum number of guesses allowed.
 * @constant {number} reward - The user's reward points, adjusted based on correct and incorrect guesses.
 */

/**
 * @function guessLetter
 * @description Handles a player's guess by checking if the guessed letter is in the word. Updates the guessed word, calculates the reward, and checks if the player has won or lost.
 * 
 * @param {string} letter - The letter the player is guessing.
 * 
 * @returns {void}
 */
function guessLetter(letter) {
  let check = array1.includes(letter); // Check if the guessed letter is in the word.
  
  if (check) {
      // If the guessed letter is correct, update the guessed word.
      for (let i = 0; i < array1.length; i++) {
          if (array1[i] == letter) {
              array2[i] = letter; // Add the correct letter in the right position.
          }
      }
      console.log(array2); // Display the current guessed word.
      reward += 100; // Award points for correct guess.
      console.log(`You guessed the letter. Balance: ${reward} points`);
      
      // Check if the player has won.
      if (!array2.includes('_')) {
          console.log("You won!");
      }
  } else {
      // If the guessed letter is incorrect, reduce guesses and penalize reward.
      max_guess--;
      console.log(array2); // Display the current guessed word.
      reward -= 50; // Penalize points for incorrect guess.
      console.log(`You didn't guess the letter. Balance: ${reward} points`);
      console.log(`Guesses left: ${max_guess}`);
      
      // Check if the player has lost.
      if (max_guess <= 0) {
          console.log("You lost!");
      }
  }
}

// Test the game with initial guesses.
guessLetter("C");
guessLetter("A");
guessLetter("T");
