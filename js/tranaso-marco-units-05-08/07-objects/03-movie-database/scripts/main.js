/**
 * @author Marco Tranaso
 * @description This script stores movie information in an object, creates an array of movie objects, 
 * and defines a function to print movie details.
 */

/**
 * @typedef {Object} Movie
 * @property {string} title - The title of the movie.
 * @property {number} duration - The duration of the movie in minutes.
 * @property {Array<string>} stars - An array of stars/actors in the movie.
 */

/**
 * @constant {Array<Movie>} movieDatabase - An array containing several movie objects.
 * @example 
 * [
 *   { title: "Puff the Magic Dragon", duration: 30, stars: ["Puff", "Jackie", "Living Sneezes"] },
 *   { title: "Dragon's Breath", duration: 120, stars: ["Fire Fang", "Flame Claw", "Dawn Shadow"] }
 * ]
 */
const movieDatabase = [
    { title: "Puff the Magic Dragon", duration: 30, stars: ["Puff", "Jackie", "Living Sneezes"] },
    { title: "Dragon's Breath", duration: 120, stars: ["Fire Fang", "Flame Claw", "Dawn Shadow"] },
    { title: "Ocean's 8", duration: 110, stars: ["Sandra Bullock", "Cate Blanchett", "Anne Hathaway"] },
    { title: "The Matrix", duration: 136, stars: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"] }
];

/**
 * Prints the movie information in a readable format.
 * @function
 * @param {Movie} movie - The movie object to print.
 * @returns {void}
 */
function printMovieInfo(movie) {
    console.log(`${movie.title} lasts for ${movie.duration} minutes. Stars: ${movie.stars.join(", ")}.`);
}

// Test the function by printing one movie
printMovieInfo(movieDatabase[0]);

// Use the function to print all the movies in the database
movieDatabase.forEach(printMovieInfo);
