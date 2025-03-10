// Author: Marco Tranaso

/**
 * @function calculateDogAge
 * @param {number} dog_age - The age of the dog in dog years.
 * Converts the dog's age into human years and logs the result.
 */
function calculateDogAge(dog_age) {
    let dog_in_human_age = dog_age / 7;
    console.log(`Your dog is ${dog_in_human_age} years old in dog years`);
}

calculateDogAge(7);
calculateDogAge(81);
calculateDogAge(147);
