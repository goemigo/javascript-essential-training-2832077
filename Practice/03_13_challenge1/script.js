import Book from "./Book.js";

const harryPotter2 = new Book(
    "Harry Potter and The Secret Chamber",
    "December 19, 2000",
    "J.k Rowling"
)

const harryPotter3 = new Book(
    "Harry Potter and The Prisoner of Azkaban",
    "2006-01-31",
    "J.k Rowling"
)

console.log(harryPotter2)
console.log(harryPotter3)

console.log("years since HP2 has been published:", harryPotter2.howOld())
console.log("years since HP3 has been published:",harryPotter3.howOld())