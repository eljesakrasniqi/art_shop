var storedObject = JSON.parse(localStorage.getItem('formData'));
let div = document.getElementById("miniCol");
let firstNamePlace = document.createElement("h1");
let lastNamePlace = document.createElement("h1");
let emailPlace = document.createElement("h2");

let nameDiv = document.getElementById("nameCol");
let firstNameText = document.createElement("h1");
firstNameText.textContent = storedObject.firstName;
nameDiv.appendChild(firstNameText);

let lastNameDiv = document.getElementById("lastNameCol");
let lastNameText = document.createElement("h1");
lastNameText.textContent = storedObject.lastName;
lastNameDiv.appendChild(lastNameText);

let emailDiv = document.getElementById("emailCol");
let emailText = document.createElement("h1");
emailText.textContent = storedObject.email;
emailDiv.appendChild(emailText);

let birthdayDiv = document.getElementById("birthdayCol");
let birthdayText = document.createElement("h1");
birthdayText.textContent = storedObject.birthday;
birthdayDiv.appendChild(birthdayText);

div.appendChild(firstNamePlace);

div.appendChild(lastNamePlace);
div.appendChild(emailPlace);
firstNamePlace.textContent = storedObject.firstName;
lastNamePlace.textContent = storedObject.lastName;
emailPlace.textContent = storedObject.email;