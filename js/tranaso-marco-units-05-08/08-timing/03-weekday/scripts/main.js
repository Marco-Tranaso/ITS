/**
 * @author Marco Tranaso
 * @description This function returns the weekday abbreviation in the specified language ('en' or 'it').
 */

/**
 * Returns the abbreviation of the weekday in the specified language.
 * @function getWeekDay
 * @param {Date} date - A JavaScript Date object representing the date to check.
 * @param {string} language - The language for the weekday abbreviation ('en' for English, 'it' for Italian).
 * @returns {string} The abbreviation of the weekday in the specified language or an error message if the language is invalid.
 * @example
 * let today = new Date();
 * console.log(getWeekDay(today, 'en')); // Output: 'MO' (or other weekday abbreviation)
 * console.log(getWeekDay(today, 'it')); // Output: 'LU' (or other weekday abbreviation)
 * console.log(getWeekDay(today, 'fr')); // Output: 'Invalid language. Use 'en' or 'it'.
 */
function getWeekDay(date, language) {
    let daysEn = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
    let italian_days = ['DO', 'LU', 'MA', 'ME', 'GI', 'VE', 'SA'];

    let index = date.getDay();

    if (language == 'en') {
        return daysEn[index];
    } else if (language == 'it') {
        return italian_days[index];
    } else {
        return "Invalid language. Use 'en' or 'it'.";
    }
}

// Example usage:
let today = new Date();
console.log(getWeekDay(today, 'en'));  // Example: 'MO'
console.log(getWeekDay(today, 'it'));  // Example: 'LU'
console.log(getWeekDay(today, 'fr'));  // Example: 'Invalid language. Use 'en' or 'it'.
