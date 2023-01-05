/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */
 const cat = {
  name: "Stinky",
  age: 6,
  geneder: "female",
  color: "brown",
  mealTime: {
    firstMeal: "morning",
    secondMeal: "afternoon",
  },
  isFull: false,
  haveMeal: function (mealStatus) {
    this.isFull = mealStatus;
  },
};

console.log("full status:",cat.isFull)
cat.haveMeal(true)
console.log("full status:",cat.isFull)