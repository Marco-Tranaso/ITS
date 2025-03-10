// Author: Marco Tranaso

/**
 * @function celsiusToFahrenheit
 * @param {number} celsius_temperature - The temperature in Celsius to be converted to Fahrenheit.
 * Converts a given temperature from Celsius to Fahrenheit and logs the result.
 */
function celsiusToFahrenheit(celsius_temperature) {
    console.log(`${celsius_temperature}°C is ${celsius_temperature * (9 / 5) + 32}°F`);
}

/**
 * @function fahrenheitToCelsius
 * @param {number} fahrenheit_temperature - The temperature in Fahrenheit to be converted to Celsius.
 * Converts a given temperature from Fahrenheit to Celsius and logs the result.
 */
function fahrenheitToCelsius(fahrenheit_temperature) {
    console.log(`${fahrenheit_temperature}°F is ${(fahrenheit_temperature - 32) * (5 / 9)}°C`);
}

celsiusToFahrenheit(0);
fahrenheitToCelsius(32);
