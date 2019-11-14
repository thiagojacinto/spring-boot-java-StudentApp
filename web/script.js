// Connection with server app based on Java + Spring Boot

// ERROR verifying function
async function CheckError(response) {
  if (response.status >= 200 && response.status <= 299) {
    return response.json();
  } else {
    throw Error(response.statusText);
  }
}

// GET Method function
async function getData(url = '') { //, data = {}) {
  // Default options are marked with *
  const response = await fetch(url, {
    method: 'GET', // *GET, POST, PUT, DELETE, etc.
    mode: 'same-origin', // no-cors, *cors, same-origin
    /*
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'omit', // include, *same-origin, omit
    headers: {
      'Content-Type': 'application/json'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrer: 'no-referrer', // no-referrer, *client
    */
  }).then(CheckError);
  // return await response.json(); // parses JSON response into native JavaScript objects // put it inside 'CheckError' function
}

// Tries GET
try {
  const dataFromGet = getData('http://localhost:8080/students');
  console.log(JSON.stringify(dataFromGet)); // JSON-string from `response.json()` call
} catch (error) {
  console.error(error);
}

// ***************** POST *****************

const postButton = document.querySelector('.post-button');
let methodUrl = 'http://localhost:8080/students/';
let methodArgs = {
  "id": 22,
  "name": "Thiago Test Post 3",
  "course": "JavaScript dev"
}
postButton.addEventListener('click', triesPost);

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
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}

// Tries POST
function triesPost() {
  try {
    const dataFromPost = postData(methodUrl, methodArgs);
    console.log(JSON.stringify(dataFromPost)); // JSON-string from `response.json()` call
  } catch(error) {
    console.error(error);
  }
}

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
  });
  return await response.json(); // parses JSON response into native JavaScript objects
}