/* EXERCICE 1 */

let character = document.querySelector('#character'); // we select the <div> with the ID 'character'

let changeColour = function(event) { // we create a function to change the colour
  switch(event.key) { // we test which key is pressed
    case '0': // if key 0
      character.style.background = 'lightblue'; // we attribute a background color
    break;
    case '1': // if key 1
      character.style.background = 'lightsalmon';
    break;
    case '2': // if key 2
      character.style.background = 'pink';
    break;
    case '3': // if key 3
      character.style.background = "aquamarine";
    break;
    case '4': // if key 4
      character.style.background = "blueviolet";
    break;
    case '5': // if key 5
      character.style.background = "lime";
    break;
    case '6': // if key 6
      character.style.background = "moccasin";
    break;
    case '7': // if key 7
      character.style.background = "gold";
    break;
    case '8': // if key 8
      character.style.background = "darkorange";
    break;
    case '9': // if key 9
      character.style.background = "deeppink";
    break;
    //default:  // if another key is pressed
      //console.log("We request that you press a key between 0 and 9!"); // we display in console a message
  };
};

let changeColour_v2 = function(event) { // we create a function to change the colour
  let colours = ['lightblue','lightsalmon','pink','aquamarine','blueviolet','lime','moccasin','gold','darkorange','deeppink'];
  character.style.background = colours[event.key];
};
let removeColour = function(event) { // we create a function to change the colour
  character.style.background = 'none';
};

document.addEventListener ('keydown', changeColour_v2); // we add an event listener on the current document to check when the key is pressed
document.addEventListener ('keyup', removeColour); // we add an event listener on the current document to check when the key is pressed


/* EXERCICE 2 */
let upDiv = document.querySelector("#up"); // we select the <div> with the ID 'up'
let downDiv = document.querySelector("#down"); // we select the <div> with the ID 'down'
let leftDiv = document.querySelector("#left"); // we select the <div> with the ID 'left'
let rightDiv = document.querySelector("#right"); // we select the <div> with the ID 'right'

let addOpacity = function(event) { // function to add the class to the element
  switch (event.key) { // we detect which key is pressed
    case 'ArrowUp': // if arrow up
      upDiv.classList.add('highlight'); // we add the CSS class 'highlight' to the element
      break;
    case 'ArrowDown': // if arrow down
      downDiv.classList.add('highlight');
      break;
    case 'ArrowLeft': // if arrow left
      leftDiv.classList.add('highlight');
      break;
    case 'ArrowRight': // if arrow right
      rightDiv.classList.add('highlight');
      break;
  }
}

let removeOpacity = function(event) { // function to remove the class from the element
  switch (event.key) { // we detect which key is pressed
    case 'ArrowUp': // if arrow up
      upDiv.classList.remove('highlight'); // we remove the CSS class 'highlight' ftom the element
      break;
    case 'ArrowDown': // if arrow down
      downDiv.classList.remove('highlight');
      break;
    case 'ArrowLeft': // if arrow left
      leftDiv.classList.remove('highlight');
      break;
    case 'ArrowRight': // if arrow right
      rightDiv.classList.remove('highlight');
      break;
  }
}
// we add an event listener on the current document to check when the key is pressed
// => we add the opacity class on the concerned <div>
document.addEventListener ('keydown', addOpacity);
// we add an event listener on the current document to check when the key is released
// => we remove the opacity class on the concerned <div>
document.addEventListener ('keyup', removeOpacity);

// Bonus
let animationLetter = function(event) {
  let div = document.querySelector('.zoomIn');
  let span = document.createElement('span');
  span.innerHTML = event.key;
  span.classList.add('text');
  div.appendChild(span);
  setTimeout(function(){
    div.removeChild(span)
  },2000)
}
document.addEventListener ('keydown', animationLetter);
