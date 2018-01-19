
// Exercie 1

let bodyElement = document.querySelector('body'); // select the <body> tag

//bodyElement.classList.remove('bg-aqua'); // remove the old class
//bodyElement.classList.add('bg-olive'); // add the new class
bodyElement.classList.replace('bg-aqua','bg-olive'); // replace the old class by the new class

let firstParagraph = document.querySelector('#first-paragraph'); // select the #first-paragraph item thanks to its ID
let toggleFirstParagraph = ['bg-lime','gray']; // create a table of class to remove

firstParagraph.classList.remove(...toggleFirstParagraph); // remove the class thanks to the spread syntax https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator
firstParagraph.classList.add('aqua'); // add the new class

let bgSilver = document.querySelectorAll('.bg-silver'); // select all the elements with the .bg-silver class

bgSilver.forEach(function (item) { // loop the array including all the elements with the .bg-silver class
  item.classList.replace('bg-silver','bg-teal'); // replace all the bg-silver class by the .bg-teal class
});

let blockquote = document.querySelectorAll('blockquote'); // select all the <blockquote> tag
blockquote.forEach(function (item) { // loop the array including all the <blockquote>
  item.classList.add('bg-white'); // add the .bg-white on each <blockquote> tag
});


// Exercice 2

let myTable = document.querySelector('#my-table'); // select #my-table
myTable.classList.add('bg-purple'); // add the class bg-purple

let allParagraphsInContainer = document.querySelectorAll('.container p'); // select all the <p> inside the <div class="container"></div>

allParagraphsInContainer.forEach(function (item) { // loop the array including all the <p>
  item.classList.add('shadow'); // add the class 'shadow' on each <p> tag
});


// Exercice 3

let allPre = document.querySelectorAll('pre'); // select all the <pre> tag

allPre.forEach(function (item) { // loop the array including all the <pre> tag
  item.style.color = 'white'; // assign the new color
  item.style.backgroundColor = 'lightblue'; // assign the new background-color
  item.style.borderTop = '3px solid red'; // assign the new border-top
  item.style.borderBottom = '3px solid red'; // assign the new border-bottom
});

let firstH3 = document.querySelector('h3'); // return 1st element in case of there is more than one
firstH3.innerHTML = '<em>Itelic title ! yeah !</em>'; // insert the new HTML content in the <h3>

let firstH2 = document.querySelector('h2'); // select the first <h2>
firstH2.innerText = '<strong>HTML doens\'t work !</strong>'; // insert the new text content in the <h2>


// Exercice 4

let firstUl = document.querySelector('ul'); // select the first <ul>

let newLi = document.createElement('li'); // create the new <li>

newLi.innerHTML = 'Mon meilleur ami est <a href="http://www.google.com">Google</a>'; // insert the content in the new <li>

firstUl.insertBefore(newLi,null); // insert the new <li> in the <ul> at the last position

let lastLi = firstUl.querySelectorAll('li'); // select all the <li> of the <ul>

let firstLink = lastLi[lastLi.length - 1].querySelector('a'); // select the first link in the last <li> of the <ul>

firstLink.style.color = "red"; // give the new color style to the first link of the last <li> of the <ul>


// Exercice 5

let firstOl = document.querySelector('ol'); // select the first <ol>

while (firstOl.firstChild) { // while there is a first child we loop
  firstOl.removeChild(firstOl.firstChild); // we remove the first child
}

let codeName = ['Silent Teacher','Code Monkey','CodeCombat']; // define the array

codeName.forEach(function (item) { // loop on the array
  let newLi = document.createElement('li'); // create the <li> newElement
  newLi.innerHTML = item; // we insert the current value in the new <li>
  firstOl.insertBefore(newLi,null); // we add the new <li> to the <ol>
})
