// Author: Marco Tranaso

let a = "ciao";

// Reassigning the value of variable 'a' to 'c'
a = "c";

console.log(a);

/**
 * @function assignGrade
 * @param {number} score - The score to assign a grade.
 * @returns {string} The grade based on the score.
 * This function assigns a letter grade based on the score input.
 */
function assignGrade(score) {
    let message;
    switch (score) {
        case 10:
            message = 'A';
            break;
        case 9:
            message = 'B';
            break;
        case 8:
            message = 'C';
            break;
        case 7:
            message = 'D';
            break;
        case 6:
            message = 'E';
            break;
    }
    return message;
}

// Loop to assign grades for scores from 60 to 100
for (let i = 60; i <= 100; i++) {
    let grade = assignGrade(Math.floor(i / 10));
    console.log(`For ${i}, you got a ${grade}.`);
}
