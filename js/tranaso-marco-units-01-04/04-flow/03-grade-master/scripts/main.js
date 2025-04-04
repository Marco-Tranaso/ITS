/**
 * Assigns a grade based on the score using a switch statement.
 * Matches scores from 10 to 6 with letter grades. 
 * If the score is 9, it will log a special message and then continue with the grade for 8.
 * 
 * @param {number} score - The score to be evaluated.
 */
function assignGrade(score) {
    let message;
    switch (score) {
        case 10:
            message = 'A';
            break;
        case 9:
            console.log('you got a B but i will give you a C');
            // intentional fall-through     
        case 8:
            message = 'C';
            break;
        case 7:
            message = 'D';
            break;
        case 6:
            message = 'E';
            break;
        default:
            message = 'Wrong score';
    }
    console.log(message);
}

assignGrade(10);
assignGrade(8);
assignGrade(7);
