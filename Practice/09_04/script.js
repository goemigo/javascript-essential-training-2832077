/**
 * Practice: Play with event listeners
 * - Use an event listener and CSS either inline or through an added class to draw a highlight around the entire grid when you hover over it with your mouse.
 * - Add an event listener to each grid cell to highlight that cell when you hover your mouse over it.
 * - Add an event listener to each grid cell to change its background color when it is clicked.
 * - Add an event listener to a specific key on the keyboard to change the background color of the whole page - from dark to light and back again.
 */

//generate random hex color
const randColor = ()=>{
    let hexColor = Math.floor(Math.random()*16777215).toString(16)
    return hexColor
}
//find the element to listen, in this case, it's a nodelist for all the cells
const cells = document.querySelectorAll(".cell")

//for each cell, add a listener
cells.forEach((cell)=>{
    cell.addEventListener("click",()=>{
        cell.style.backgroundColor =  `#${randColor()}`
    })
})