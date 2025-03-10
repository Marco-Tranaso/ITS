// Author: Marco Tranaso

/**
 * Prints the multiplication table for 9 from 0 to 10.
 * @function
 */
for (let i = 0; i <= 10; i++) {
    console.log(`${i} * 9 = ${i * 9}`);
}

/**
 * Prints the multiplication table from 1 to 10 for both i and j.
 * @function
 */
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
}
