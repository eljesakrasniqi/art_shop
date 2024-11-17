const form = document.getElementById("form");
let password;

function saveFormData(event) {

    event.preventDefault();

    // mi marr vlerat e inputav
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const birthday = document.getElementById("birthday").value;
    const email = document.getElementById("email").value;
    password = document.getElementById("password").value;

    // me kriju ni object mi ru te dhenat
    const formData = {
        firstName,
        lastName,
        birthday,
        gender,
        email,
        password
    };

    // me kthy objektin ne JSON string
    const formDataJSON = JSON.stringify(formData);

    // me ru ne local storge
    localStorage.setItem('formData', formDataJSON);

    //per mu fshi te dhenat masi te prek send
    document.getElementById("firstName").value = '';
    document.getElementById("lastName").value = '';
    document.getElementById("birthday").value = '';
    document.querySelector('input[name="gender"]:checked').checked = false;
    document.getElementById("email").value = '';
    document.getElementById("password").value = '';
}
function validateForm() {
  var firstName = document.getElementById('firstName').value;
  var lastName = document.getElementById('lastName').value;
  var birthday = document.getElementById('birthday').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;


  if (firstName === "" || lastName === "" || birthday === "" || email === "" || password === "") {
      alert("Please fill out all required fields");
  }else{
    window.location.href = './logIn.html';
  }
  
}

// mi jep event listener formes
form.addEventListener("submit", saveFormData);
form.addEventListener("submit", validateForm);


