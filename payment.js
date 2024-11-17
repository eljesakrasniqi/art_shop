let row = document.getElementById("row");
let column = document.getElementById("column");
let container = document.getElementById("container");
fetch("./picture.json")
  .then((respose) => {
    return respose.json();
  })
  .then((data) => {
    getItemsFromStorage().forEach((item) => {
      item.id.forEach((id) => {
        data.forEach((picture) => {
          if (picture.id == id) {
            console.log(picture);

            let secondCol = document.createElement("div");
            secondCol.setAttribute("class", "secondCol");

            let text_col = document.createElement("div");
            text_col.setAttribute("class", "text_col");

            let priceCol = document.createElement("div");
            priceCol.setAttribute("class", "priceCol");

            let img = document.createElement("img");
            img.setAttribute("src", picture.img);
            img.className = "pictureImage";

            let name = document.createElement("h2");
            name.setAttribute("class", "name");
            name.textContent = picture.name;

            let size = document.createElement("p");
            size.setAttribute("class", "size");
            size.textContent = picture.size;

            let price = document.createElement("h2");
            price.setAttribute("class", "price");
            price.textContent = picture.price;

            text_col.appendChild(name);
            text_col.appendChild(size);

            priceCol.appendChild(text_col);
            priceCol.appendChild(price);

            secondCol.appendChild(img);
            secondCol.appendChild(priceCol);

            column.appendChild(secondCol);
            row.appendChild(column);
            container.appendChild(row);
          }
        });
      });
    });
  });

let form = document.getElementById("form");
function getItemsFromStorage(property) {
  let addItemsArray;
  if (localStorage.getItem("property") == null) {
    addItemsArray = [];
  } else {
    addItemsArray = JSON.parse(localStorage.getItem("property"));
  }
  return addItemsArray;
}

//save to ls

function saveFormData(event) {
  event.preventDefault();

  const address = document.getElementById("address_input").value;
  const city = document.getElementById("city").value;
  const state = document.getElementById("state").value;
  const zip_code = document.getElementById("zip_code").value;
  const card_name = document.getElementById("card_name").value;
  const card_number = document.getElementById("card_number").value;
  const expiration = document.getElementById("expiration").value;
  const card_cvv = document.getElementById("card_number").value;

  const formData = {
    address,
    city,
    state,
    zip_code,
    card_name,
    card_number,
    expiration,
    card_cvv,
  };
  console.log(formData);
  const formDataJSONPayment = JSON.stringify(formData);

  localStorage.setItem("formDataPayment", formDataJSONPayment);
}


const loginForm = document.getElementById("form");
const buyButton = document.getElementById("buyButton");

function validateForm() {
  var address = document.getElementById('address_input').value;
  var city = document.getElementById('city').value;
  var state = document.getElementById('state').value;
  var zipCode = document.getElementById('zip_code').value;
  var cardName = document.getElementById('card_name').value;
  var cardNumber = document.getElementById('card_number').value;
  var expiration = document.getElementById('expiration').value;
  var cardCVV = document.getElementById('card_cvv').value;

 
  if (address === "" || city === "" || state === "" || zipCode === "" ||
      cardName === "" || cardNumber === "" || expiration === "" || cardCVV === "") {
      alert("Please fill out all required fields");
  }else{
    window.location.href="/orderConfirmed.html";
  }

}

var dropdown = document.getElementById("header");
function open() {
var menu = document.getElementById("colOne");
menu.style.display = (menu.style.display === 'flex' ? 'none' : 'flex');
}
dropdown.addEventListener("click", open);
loginForm.addEventListener("submit", validateForm);
form.addEventListener("submit", saveFormData);