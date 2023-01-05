/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */

import Cat from "./Cat.js";

const stinky = new Cat(
    "Stinky",
    6,
    "female",
    "brown",
    "12:00",
    false
);

const kevin = new Cat(
    "Kevin",
    3,
    "male",
    "white, brown and black",
    "14:00",
    false
);
console.log("Stinky object:",stinky);
console.log("Kevin object:",kevin);
console.log(kevin.color)