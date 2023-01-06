/**
 * Practice: Pass values between functions
 *
 * - Create two functions
 * - Main function creates article element with data from object
 * - Helper function creates.
 */

function emilyfunction(str)  {
    const newArticle = document.createElement(str)
    newArticle.innerHTML = `
    <h1>${str}</h1>
  `;
  return newArticle;
}

// const main = document.querySelector("main");
// main.append(emilyfunction("blablabla"));

const emilyExpression = function (a){
    const newArticle = document.createElement(a)
    newArticle.innerHTML = `
    <h1>${a}</h1>
  `;
  return newArticle;
}

// const main = document.querySelector("main");
// main.append(emilyExpression("emilyFunctionExpression"));

//use the IIFE directly without calling
const main = document.querySelector("main");
main.append((function (){
    let a = "emilyIIFE"
    const newArticle = document.createElement(a)
    newArticle.innerHTML = `
    <h1>${a}</h1>
  `;
  return newArticle;
})());