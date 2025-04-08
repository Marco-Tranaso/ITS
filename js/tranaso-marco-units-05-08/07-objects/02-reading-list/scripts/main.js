/**
 * @author Marco Tranaso
 * @description This script creates an array of books and iterates through it to log information about each book.
 * It checks whether the book has been read or not and logs an appropriate message.
 */

/**
 * @typedef {Object} Book
 * @property {string} title - The title of the book.
 * @property {string} author - The author of the book.
 * @property {boolean} alreadyRead - A boolean indicating if the book has been read or not.
 */

/**
 * @constant {Array<Book>} readingList - An array of books where each book is represented by an object.
 * @example 
 * [
 *   { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
 *   { title: "1984", author: "George Orwell", alreadyRead: false }
 * ]
 */
const readingList = [
    { title: "The Hobbit", author: "J.R.R. Tolkien", alreadyRead: true },
    { title: "1984", author: "George Orwell", alreadyRead: false },
    { title: "The Catcher in the Rye", author: "J.D. Salinger", alreadyRead: true },
    { title: "To Kill a Mockingbird", author: "Harper Lee", alreadyRead: false }
];

// Iterate through the array of books and log information
readingList.forEach(book => {
    if (book.alreadyRead) {
        console.log(`You already read "${book.title}" by ${book.author}`);
    } else {
        console.log(`You still need to read "${book.title}" by ${book.author}`);
    }
});
