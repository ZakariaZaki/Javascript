/*
Asyncronous
JavaScript
And
xml
*/
/*
for (var i = 3; i > 0; i--) {
  console.log(i)
}
let a = 0;
let myFunction = function(){
  a++;
  console.log("Hello world " + a);
}

setTimeout(myFunction, 3000); // one time miliseconds
setInterval(myFunction, 1000); // multiple times

console.log("i'm coming after");
*/

let myVar = "hello";
// create a new instance of XMLHttpRequest
let ajax = new XMLHttpRequest();
    // the action the we will do when the request is finshed
    let whenDataLoaded = function(){
      let dataText = ajax.responseText;
      let dataObject = JSON.parse(dataText);
      manipulateData(dataObject);
    }
    ajax.onload = whenDataLoaded;
    // the type, the url, asynchronous ?
    ajax.open("GET", "mydata.json", true);
    // sed the request
    ajax.send(null);

    let manipulateData = function(data){
      data.age = 1200;
      for (var i = 0; i < data.children.length; i++) {
        data.children[i] = data.children[i] +  " hello";
      }
      displayChidren(data);
    }

    let displayChidren = function(data){
      for (var i = 0; i < data.children.length; i++) {
        let recipient = document.getElementById("recipient");
        let element = document.createElement("div");
        element.innerHTML = data.children[i];
        recipient.appendChild(element);
      }
      makeItPretty();
    }

    let makeItPretty = function(){
      let divs = document.getElementsByTagName("div");
      for(let i =0; i<divs.length; i++){
        divs[i].style.background = "red";
      }
    }
