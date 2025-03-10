// Author: Marco Tranaso

/**
 * Prints the correct plural or singular form of a noun based on the number provided.
 * Special case for "sheep" and "geese".
 * @param {string} noun - The noun to check (e.g., "sheep", "dog").
 * @param {number} number - The number to check for singular/plural form.
 * @function
 */
function oneToMany(noun, number) {
    if (number > 1) {
        switch (noun) {
            case "sheep":
                console.log(`${number} sheep`);
                break;
            case "geese":
                console.log(`${number} goose`);
                break;
            default:
                console.log(`${number} ${noun + 's'}`);
                break;
        }
    } else {
        console.log(`${number} ${noun}`);
    }
}

oneToMany("sheep", 2);
oneToMany("dog", 1);
oneToMany("dog", 2);
oneToMany("geese", 2);
