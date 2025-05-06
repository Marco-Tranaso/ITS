/**
 * @author Marco Tranaso
 * @description Converts temperatures between Celsius and Fahrenheit.
 */

/**
 * Converts Celsius to Fahrenheit and logs the result.
 * @function celsiusToFahrenheit
 * @param {number} celsius_temperature - Temperature in Celsius.
 * @returns {void}
 */
function celsiusToFahrenheit(celsius_temperature) {
    console.log(`${celsius_temperature}°C is ${celsius_temperature * (9 / 5) + 32}°F`);
}

/**
 * Converts Fahrenheit to Celsius and logs the result.
 * @function fahrenheitToCelsius
 * @param {number} fahrenheit_temperature - Temperature in Fahrenheit.
 * @returns {void}
 */
function fahrenheitToCelsius(fahrenheit_temperature) {
    console.log(`${fahrenheit_temperature}°F is ${(fahrenheit_temperature - 32) * (5 / 9)}°C`);
}

// Example conversions
celsiusToFahrenheit(0);  // Output: 0°C is 32°F
fahrenheitToCelsius(32); // Output: 32°F is 0°C

// Using setInterval to convert temperatures incrementally
let temp1 = 0;
let intervalId = setInterval(() => {
    if (temp1 <= 100) {
        celsiusToFahrenheit(temp1);
        temp1++;
    } else {
        clearInterval(intervalId); // Stop when reaching 100°C
    }
}, 1000);

/**
 * Recursively prints temperature conversion using setTimeout.
 * @function printTemperature
 * @param {number} temp - The starting temperature in Celsius.
 * @returns {void}
 */
function printTemperature(temp) {
    if (temp <= 100) {
        celsiusToFahrenheit(temp);
        setTimeout(() => printTemperature(temp + 1), 1000);
    }
}

// Start recursive temperature conversion
printTemperature(0);
