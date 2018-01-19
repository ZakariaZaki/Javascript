let region = 'Bahrain'
let dataRequest = new XMLHttpRequest();

let whenDataLoaded = function() { // callback function
  let data;
  let dataText = dataRequest.responseText; // we store the text of the response
  let dataObject = JSON.parse(dataText); // we convert the text into an object
  data = addRandomNumber(dataObject); // we add the random number
  console.log('*'.repeat(50)); // cosmetics
  console.log('We display all the data');
  sortDataByScoreAscending(data); // we sort the data
  console.log(data);
  console.log('*'.repeat(50)); // cosmetics
  console.log('We divided the data into three categories'); // message in the console log
  dividedIntoCategoriesObject = dividedIntoCategories(data);
  console.log(dividedIntoCategoriesObject); // we divided the data
  console.log('*'.repeat(50)); // cosmetics
  console.log('We select the people coming from' + region);
  console.log(comingFromSpecificArea(data,region)); // we select the people from a specifi specific area
  console.log('*'.repeat(50)); // cosmetics
  console.log('The smaller score is ' + smallerScore(data));
  console.log('*'.repeat(50)); // cosmetics
  console.log('The higher score is ' + higherScore(data));
  console.log('*'.repeat(50)); // cosmetics
  manipulateDataFromObject(data,'body','General Table','generalTable');
  manipulateDataFromObject(dividedIntoCategoriesObject.a,'body','Category A (>750)','categoryATable');
  manipulateDataFromObject(dividedIntoCategoriesObject.b,'body','Category B (>500 & <750)','categoryBTable');
  manipulateDataFromObject(dividedIntoCategoriesObject.c,'body','Category C (<500)','categoryCTable');
  manipulateDataFromObject(comingFromSpecificArea(data,region),'body','Coming from ' + region,'areaTable');
}

dataRequest.onload = whenDataLoaded; // we assign the function to excecute when the data are loading
dataRequest.open("GET", "files/data.json", true); // the type, the url, asynchronous ?
dataRequest.send(null); // we send the request

let addRandomNumber = function(data) { // we add the random number
  // good but not optimum
  // data.forEach(function(item){
    // item.randomNumber = Math.round(Math.random() * 1000);
  //}
  data = data.map(function(item) { // we add in each value the randomNumber
    item.randomNumber =  Math.round(Math.random() * 1000); // we assign the randomNumber
    return item; // we return the value and store it in the original object
  });

  return data;

}

let sortDataByScoreAscending = function(data) { // function to sort the data
  data.sort( function (a, b) { // we compare the value
    return a.randomNumber - b.randomNumber; // we give the comparaison condition
  });
}

let dividedIntoCategories = function(data) { // function to split the data into 3 categories

  let categoriesArray = { a:[], b:[], c:[] };
  data.forEach( function(item) {
    if (item.randomNumber > 750) { // if randomNumber is higher than 750
      categoriesArray.a.push(item); // we push it into the right array
    } else if (item.randomNumber < 500) { // if randomNumber is smaller than 500
      categoriesArray.c.push(item); // we push it into the right array
    } else { // if randomNumber is between 500 et 750
      categoriesArray.b.push(item); // we push it into the right array
    }
  });

  //console.log('Categorie *A* (>750)\t\t\t', categoriesArray.a);
  //console.log('Categorie *B* (>500 & <700)\t\t', categoriesArray.b);
  //console.log('Categorie *C* (<500)\t\t\t', categoriesArray.c);
  return categoriesArray;

}

let comingFromSpecificArea = function(data, area) { // function to select people from a specific area
  let specificAreaArray = data.filter(function(item) { // we apply the filter thanks to a function on a specific value in the object
    if (item.country === area) {
      return item;
    }
  });
  return specificAreaArray;
}

let smallerScore = function(data) { // function to return the smaller score
  sortDataByScoreAscending(data); // only to be sure that the array is still well sorted
  return data[0].randomNumber; // if the array is well sorted, the smaller score is in the first element
}

let higherScore = function(data) { // function to return the higher score
  sortDataByScoreAscending(data); // only to be sure that the array is still well sorted
  return data[(data.length -1)].randomNumber; // if the array is well sorted, the higher element is the last element
}

let manipulateDataFromObject = function(data, parent, h2Content, id) {

  let parentElement = document.querySelector(parent); // we select the parent

  let h2Tag = document.createElement('h2'); // we create the title <h2>
  h2Tag.innerHTML = h2Content; // we insert the text inside the <h2>
  parentElement.appendChild(h2Tag); // we insert the <h2> in the parent element

  let tableParent = document.createElement('table'); // we create a table
  parentElement.appendChild(tableParent); // we insert the table in parent element
  tableParent.id = id; // we add the id of the element
  tableParent.style.width = '80%'; // we add a with to the table

  let trHeader = document.createElement('tr'); // we create a new row
  tableParent.appendChild(trHeader); // we inster the row in the table
  for (let key in data[0])  { // we loop the key of the object to create a column by key. As all the elements are the same, we loop only on the first one
    let headerCell = document.createElement('th'); // we create the header cell
    headerCell.innerText = key; // we insert the value of the key
    trHeader.appendChild(headerCell); // we inster the cell inside the header row
  };

  data.forEach( function(item,index) { // we loop the object the display the data

    let row = document.createElement('tr'); // we create a new row
    tableParent.appendChild(row); // we inster the row in the table
    for(let key in item) { // we loop the key/value of the current item
      let rowCell = document.createElement('td'); // we insert a new cell inside the row
      rowCell.innerHTML = item[key]; // we insert the value
      row.appendChild(rowCell); // we add the cell to the current row
      rowCell.style.width = '25%'; // we add a style to the current cell
      rowCell.className = key; // we add a class to the current cell
      rowCell.setAttribute('data-'+key,item[key]) // we add some data-key attribute with the current value
      if (key == 'birthday' || key == 'randomNumber') { // we filter the concerned cell thanks to the key
        rowCell.style.textAlign = 'center'; // we add a text-align property to some cell
      }
    }
    row.id = 'generalID-'+(index+1); // we add an ID to the current row
    row.className = "row"; // we add a class to the current row

  });

  let hr = document.createElement('hr'); // we create a <hr>
  parentElement.appendChild(hr); // we insert the <hr> below the <table>

}
