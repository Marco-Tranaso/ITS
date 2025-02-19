function celsiusToFahrenheit(celsius_temperature){
    console.log(`${celsius_temperature}°C is ${celsius_temperature*(9/5)+32}°F`);

}
function fahrenheitToCelsius(fahrenheit_temperature){
    console.log(`${fahrenheit_temperature}°F is ${(fahrenheit_temperature-32)*(5/9)}°C`);
}
celsiusToFahrenheit(0)
fahrenheitToCelsius(32)