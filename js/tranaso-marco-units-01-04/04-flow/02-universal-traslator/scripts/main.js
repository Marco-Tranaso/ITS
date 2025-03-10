// Author: Marco Tranaso

/**
 * @function helloWorld
 * @param {string} language - The language code to display the greeting.
 * Prints a "Hello World" message in the given language.
 */
function helloWorld(language) {
    let message;
    switch (language) {
        case 'en':
            message = 'Hello World';
            break;
        case 'de':
            message = 'Hallo Welt';
            break;
        case 'fr':
            message = 'Bonjour le monde';
            break;
    }
    console.log(message);
}

helloWorld("fr");
