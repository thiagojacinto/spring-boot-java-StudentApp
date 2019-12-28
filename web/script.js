/*
 Connection with server app based on Java + Spring Boot

 Author:  Thiago Jacinto @ 2019
 Version: beta.1.3
 Github:  https://github.com/thiagojacinto/spring-boot-java-StudentApp

 */

// URL:
// 1 - When localhosting:
// const universalURL = 'http://localhost:8080/students/';

// 2 - Deployed on Heroku app: 
const universalURL = 'https://api-studentapp.herokuapp.com/students/';

// * * * * * ERROR HANDLING

// ERROR verifying function
async function CheckError(response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
		gotWrong();
    throw Error(response.statusText);
  }
}
// Print if error function
function gotWrong() {
	alert('Something went wrong. Verify and try again.');
}

// * * * * * * LIST ALL - GET BUTTON 

// GET Method function
async function getData(url = '', callback) { //, data = {}) {
  // Default options are marked with *
  const response = fetch(url, {
    method: 'GET', 
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => 
      CheckError(response)
      .then(result => {
        console.log(JSON.stringify(result));
        callback && callback(result);
        return result;
      })
    );
}

function tryToGet(url, callback) {
  // Tries GET
  try {
		const dataFromGet = getData(url, callback);
		// console.log(JSON.stringify(dataFromGet)); // JSON-string from `response.json()` call    
		return dataFromGet;
		
  } catch (error) {
		console.error(error);
  }
}

// Populate with GET ALL response:
function populateWithGetAll(found) {

  // Get div to put the response
	var inputDiv = document.querySelector('.getAllResponse');
	// clear div's content
	inputDiv.textContent = '';
  // Creates a title and its text content
  var infoTitle = document.createElement("H6");
  var information = document.createTextNode("Students found:");
  // adds to the selected div:
  infoTitle.appendChild(information);
  inputDiv.appendChild(infoTitle);

  // Loop through found array:
  for (let i=0; i < found.length; i++) {
    // Create a HTML element to hold the info
    var element = document.createElement("P");
    // get info from the input array
    var elementContent = document.createTextNode(`${found[i].name} studies ${found[i].course}. ID = ${found[i].id}`);
    element.appendChild(elementContent);

    let accentuation = document.createTextNode(';');
    // Verify if its last element
    if (i == found.length - 1) {
      accentuation = document.createTextNode('.');
    } 
    element.appendChild(accentuation);
    inputDiv.appendChild(element);
  }

}
// First get button listener
const getButton = document.querySelector('.get1-button');
getButton.addEventListener('click', e => {
  // console.log(e);  // Verify event
  e.preventDefault();
  let finalUrl = universalURL + 'findall';
  tryToGet(finalUrl, populateWithGetAll);
});

// - - - - - SECOND GET BUTTON HANDLING, FINDBYID

function populateWithID(object) {
	
  // Get div to put the response
  var inputDiv = document.querySelector('.getIDResponse');
  // clear div's content
  inputDiv.textContent = '';
    
  // verify if object is NOT empty
	if (object != null && object.length != 0) {
		// Creates a title and its text content
		var infoTitle = document.createElement("H6");
		var information = document.createTextNode("Student found:");
		// adds to the selected div:
		infoTitle.appendChild(information);
		inputDiv.appendChild(infoTitle);

		// Create a HTML element to hold the info
		var element = document.createElement("P");
		// get info from the input array
		var elementContent = document.createTextNode(`This is student is ${object.name}, that studies ${object.course}.`);
		element.appendChild(elementContent);
		inputDiv.appendChild(element);

	} else {
		gotWrong();
	}
}

// Secondo get button listener
const get2ndButton = document.querySelector('.get2-button');
get2ndButton.addEventListener('click', e => {
  e.preventDefault();
	var getInputID = document.querySelector('#findFormArea').value;
	// Prevent void input, by forcing get first
  getInputID === '' ? gotWrong() : '' ;
  
  let finalUrl = universalURL + 'findbyid/' + getInputID;
  tryToGet(finalUrl, populateWithID);
});

// ***************** POST *****************

// POST Method function = INSERT or /new
async function postData(url = '', data, callback) {
  // Default options are marked with *
  let postAction = fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: data // body data type must match "Content-Type" header
	}).then(response => {
		CheckError(response).then(res => {
      console.log(res);
      callback && callback();
    })
	}).catch(err => console.log(`Error encountered: ${err}.`));
}

// Confirms post function
function confirmsPost() {
	alert('Student added.');
}

// Tries POST
function tryToPost(inputData) {
  try {
    let finalUrl = universalURL + 'new';
    let postResponse = postData(finalUrl, inputData, confirmsPost());//JSON.parse(inputData));
    // console.log(postResponse);	// Verify
		
  } catch(error) {
    console.error(error);
  }
}

const postButton = document.querySelector('.post-button');
postButton.addEventListener('click', e => {
  e.preventDefault();   // Block auto-refresh
  const insertData = document.querySelector('.postInput').value;
  tryToPost(insertData);
});

// ***************** PUT ********************
// PUT Method function = UPDATE
async function putData(url = '', data, callback) {
  let putAction = fetch(url, {
    method: 'PUT', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: data // body data type must match "Content-Type" header
	}).then(response => {
		CheckError(response).then(res => {
      console.log(res);
      callback && callback();
    })
	}).catch(err => console.log(`Error encountered: ${err}.`));
}

// Confirms post function
function confirmsUpdate() {
	alert('Student\'s updated.');
}

// Tries PUT
function tryToPut(inputData, seletecId) {
  try {
    let finalUrl = universalURL + "update/" + seletecId;
    let putResponse = putData(finalUrl, inputData, confirmsUpdate());
  } catch(error) {
    console.error(error);
  }
}

const putButton = document.querySelector('.put-button');
putButton.addEventListener('click', e => {
  e.preventDefault();   // Block auto-refresh
  const insertData = document.querySelector('#putInput').value;
  const idData = document.querySelector('#idInput').value;
  tryToPut(insertData, idData);
});

// ***************** DELETE *****************

// DELETE Method function
async function deleteData(url, callback) { //, data = {}) {
  
  const response = await fetch(url, {
    method: 'DELETE', 
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => 
    CheckError(response)
    .then(result => {
      console.log(JSON.stringify(result));
      callback && callback(result);
      return result;
    })
  );
}
function confirmsRemove() {
  alert('Item removed from the system.')
}
function tryToRemove(url, callback) {
  try {
    let removeResponse = deleteData(url, callback);
  } catch(error) {
    console.error(error);
  }
}

// DELETE Listener
const deleteButton = document.querySelector('.delete-button');
deleteButton.addEventListener('click', e => {
  e.preventDefault();
	var deleteItemByID = document.querySelector('#removeFormArea').value;
	// Prevent void input, by forcing get first
  deleteItemByID === '' ? gotWrong() : '' ;
  var removeURL = universalURL + 'remove/' +  deleteItemByID;
  tryToRemove(removeURL, confirmsRemove);
});