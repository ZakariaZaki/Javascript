let button = document.querySelector('.buttonAddTask');
let ul = document.querySelector('.taskList');

button.addEventListener("click", function(event) {

  let proposition = document.querySelector('.taskInput').value;
  let newElement = document.createElement("li");
  newElement.innerText = proposition;
  ul.appendChild(newElement);

})

// ok thanks to the bubbling aka event propagation
ul.addEventListener('click', function(event){
  event.target.classList.toggle('done');
});
