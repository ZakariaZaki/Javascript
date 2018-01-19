
let havingInputValue = function(event) {
  //let userInput = document.querySelector('.taskInput').value;
  let newLi = document.createElement('li');
  newLi.innerText = document.querySelector('.taskInput').value;
  document.querySelector('.taskList').appendChild(newLi);
  addToggleOption(newLi);
}

let addToggleOption = function(item) {
  item.addEventListener('click',function (event){
    item.classList.toggle('done');
  })
}

let buttonAddTask = document.querySelector('.buttonAddTask');
buttonAddTask.addEventListener('click',havingInputValue);

let liList = document.querySelectorAll("li");
liList.forEach(function(item) {
  addToggleOption(item);
})
