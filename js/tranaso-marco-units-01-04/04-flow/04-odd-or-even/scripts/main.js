/**
 * Loops from 0 to 20 and checks whether each number is even or odd.
 * If the number is even, it logs a message indicating the number is even.
 * If the number is odd, it logs a message indicating the number is odd.
 */
for (i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`${i} is even`);
    }
    else {
        console.log(`${i} is odd`);
    }
}
