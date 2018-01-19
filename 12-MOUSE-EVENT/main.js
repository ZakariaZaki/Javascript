/* EXERCICE 1 */

let disappearDiv = function (event) { // we create the function that will change the display of the elements
  // event.target is a reference to the objects that sent the event
  //event.target.style.display = 'none'; // we add the css property
  event.target.style.visibility = 'hidden'; // we add the css property
}


let divs = document.querySelectorAll('.hoverMe'); // we select all the elements with the .hoverMe class
// console.log(divs);

divs.forEach(function(item) {
  // divs is an array including the selected elements as object
  // we loop the array to apply the function on each element
  item.addEventListener('mouseover',disappearDiv); // we the mouseover detection on each element into the event manager
});

/* EXERCICE 2 */
let appearDiv = function (event) { // we create the function that show up again the hidden divs
  let elements = document.querySelectorAll('.hoverMe'); // we select all the element with the .hoverMe class
  elements.forEach(function(item) { // we loop and change the display property on each element
    //item.style.display = 'block'; // we add the css property
    item.style.visibility = 'visible';
  })
}
let appearDivTimeOut = function(event){ // we create a time out function
  window.setTimeout(appearDiv,500); // the divs show up after a delay of .5sec
}
let resetDiv = document.querySelector('#reset'); // we select the div with the ID Reset
resetDiv.addEventListener('click',appearDivTimeOut); // we call the function with the time out when we click

/* EXERCICE 3 */
let axeX = document.querySelector('#axe-x'); // we select the div with the axe-x ID
let axeY = document.querySelector('#axe-y'); // we select the div with the axe-y ID

document.addEventListener("mousemove", function(event) { // we create the function to display the coordinates
  axeX.innerHTML = '<strong>X:</strong> ' + event.pageX; // we add X value inside #axe-x div
  axeY.innerHTML = '<strong>Y:</strong> ' + event.pageY; // we add Y value inside #axe-y div
}); // we add an event listener on the window to detect when the mouse moves
