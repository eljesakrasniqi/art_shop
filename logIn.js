
 function checkLogin(event) {
     event.preventDefault(); // Prevent the form from submitting

     // mi marr te dhenat nga local storage
     const savedData = localStorage.getItem('formData');

     // Përdorimi i të dhënave të ruajtura nga JSON në një objekt
     const savedFormData = JSON.parse(savedData);

     // mi marr vlerat e inputav te tashem
     const emailInput = document.getElementById('email').value;
     const passwordInput = document.getElementById('password').value;

     // mi kontrollu a jon inputat e njejt
     if (
         savedFormData &&
         emailInput === savedFormData.email &&
         passwordInput === savedFormData.password
     ) {
         window.location.href = 'index.html';
     } else {
         alert('Incorrect email or password.');
     }
 }


 const loginForm = document.getElementById('loginForm');
 loginForm.addEventListener('submit', checkLogin);



