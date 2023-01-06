/**
 * Challenge: Create an advanced function.
 * - Loop through backpackObjectArray to create an article with the class "backpack".
 * - Give the article the ID of the current backpack object.
 * - Set the inner HTML of the article to the existing HTML output provided in const content.
 * - Append each backpack object to the <main> element.
 */
//import Backpack from "./components/Backpack.js";
import backpackObjectArray from "./components/data.js";

const main = document.querySelector(".maincontent");

const backpacks = backpackObjectArray.map(
  (backpack) =>{
    //for each object, create an element, create class, set id attribute
    let newArticle = document.createElement("article");
    newArticle.classList.add("backpack");
    newArticle.setAttribute("id", backpack.id);

    //for each object element, set the cotent liberal
    let content = `
    <figure class="backpack__image">
      <img src=${backpack.image} alt="" />
    </figure>
    <h1 class="backpack__name">${backpack.name}</h1>
    <ul class="backpack__features">
      <li class="packprop backpack__volume">Volume:<span> ${
        backpack.volume
      }l</span></li>
      <li class="packprop backpack__color">Color:<span> ${
        backpack.color
      }</span></li>
      <li class="backpack__age">Age:<span> ${backpack.backpackAge()} days old</span></li>
      <li class="packprop backpack__pockets">Number of pockets:<span> ${
        backpack.pocketNum
      }</span></li>
      <li class="packprop backpack__strap">Left strap length:<span> ${
        backpack.strapLength.left
      } inches</span></li>
      <li class="packprop backpack__strap">Right strap length:<span> ${
        backpack.strapLength.right
      } inches</span></li>
      <li class="feature backpack__lid">Lid status:<span> ${
        backpack.lidOpen ? "open" : "closed" //this is a shortcut for if statement
      }</span></li>
    </ul>
`;
    newArticle.innerHTML = content;

    //return the backpack newArticle to the backpacks array
    return newArticle;
  }
)

//loop through the backpacks array, append each pack element to main
backpacks.forEach((backpack)=>{
  main.append(backpack)
})

