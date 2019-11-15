// Connection with server app based on Java + Spring Boot

// ERROR verifying function
async function CheckError(response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
}

// Common HEADERS
// const header = new Headers();

// GET Method function
async function getData(url = '') { //, data = {}) {
  // Default options are marked with *
  const response = fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    //mode: 'cors', // no-cors, *cors, same-origin
    //cache: 'default',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(response => 
      CheckError(response)
      .then(result => {
        result;
        console.log(JSON.stringify(result));
      })
    );
    return response.then(result => result);
    // return result;
  // return await response.json(); // parses JSON response into native JavaScript objects // put it inside 'CheckError' function
}

function tryToGet() {
  // Tries GET
  try {
    const dataFromGet = getData('http://localhost:8080/students/');
    console.log(JSON.stringify(dataFromGet)); // JSON-string from `response.json()` call    
    // dataFromGet.then(result => console.log(JSON.stringify(result)))
  // return JSON.stringify(dataFromGet);
  } catch (error) {
    console.error(error);
  }
}

const getButton = document.querySelector('.get1-button');
getButton.addEventListener('click', e => {
  // console.log(e);  // Verify event
  e.preventDefault();
  tryToGet();
});

// ***************** POST *****************
// Important 
const methodUrl = 'http://localhost:8080/students/';
// const methodArgs = document.querySelector('.post-text').value;



// POST Method function
async function postData(url = '', data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => CheckError(response));
  return response.text();
  // return JSON.stringify(response); // parses JSON response into native JavaScript objects
}

// Tries POST
function tryToPost(methodArgs) {
  try {
    const dataFromPost = postData(methodUrl, JSON.parse(methodArgs));
    console.log(JSON.stringify(dataFromPost)); // JSON-string from `response.json()` call
  } catch(error) {
    console.error(error);
  }
}

const postButton = document.querySelector('.post-button');
postButton.addEventListener('click', e => {
  e.preventDefault();   // Block auto-refres
  const methodArgs = document.querySelector('.post-text').value;
  tryToPost(methodArgs);
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