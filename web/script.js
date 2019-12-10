// Connection with server app based on Java + Spring Boot

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
	window.alert('Something went wrong. Verify and try again.');
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
    var elementContent = document.createTextNode(`${found[i].name} studies ${found[i].course}`);
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
  tryToGet('http://localhost:8080/students/', populateWithGetAll);
});

// - - - - - SECOND GET BUTTON HANDLING

function populateWithID(object) {
	// verify if object is NOT empty
	if (object.length != 0) {

		// Get div to put the response
		var inputDiv = document.querySelector('.getIDResponse');
		// clear div's content
		inputDiv.textContent = '';
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
  tryToGet('http://localhost:8080/students/' + getInputID, populateWithID);
});

// ***************** POST *****************
// URL:
const methodUrl = 'http://localhost:8080/students/';

// POST Method function
async function postData(url = '', data) {
  // Default options are marked with *
  let postAction = fetch(url, {
    method: 'POST', 
    headers: {
      'Content-Type': 'application/json'
    },
    body: data // body data type must match "Content-Type" header
	}).then(response => {
		CheckError(response);
		// confirmsPost();
		response;
	});
}

// Confirms post function
function confirmsPost() {
	alert('Student added.');
}

// Tries POST
function tryToPost(inputData) {
  try {
    let postResponse = postData(methodUrl, inputData);//JSON.parse(inputData));
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

// ***************** DELETE *****************

// DELETE Method function
async function deleteData(url = '') { //, data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'DELETE', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: '' //JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(CheckError);
  return await response.json(); // parses JSON response into native JavaScript objects
}