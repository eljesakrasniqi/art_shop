// script.js for details page
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get("id");
let postId;
fetch("./picture.json")
  .then((response) => response.json())
  .then((pictures) => {
    let picture = pictures.find((p) => p.id == productId); // find the product with the given ID

    if (picture) {
      document.getElementById("productImage").src = picture.img;
      document.getElementById("productName").textContent = picture.name;
      document.getElementById("productDescription").textContent =
        picture.description;
      document.getElementById("productPrice").textContent = picture.price;
      document.getElementById("product_size").textContent = picture.size;
      document.getElementById("productMaterial").textContent = picture.material;
      document.getElementById("productState").textContent = picture.state;
      postId = picture.id;
    } else {
      // handle product not found
      alert("Product not found!");
    }
  })
  .catch((error) => console.error("Error fetching product data:", error));

let getButton = document.getElementById("addToCard");
let getNumber = document.getElementById("length");
getItemsFromStorage().forEach((object) => {
  getNumber.textContent = object.id.length;
});
function addToCardFn() {
  let arrayFromLS = getItemsFromStorage();
  let arrayLS = [];
  getItemsFromStorage().forEach((object) => {
    arrayLS = object.id;
  });
  let isExist = false;
  arrayLS.forEach((id) => {
    if (postId == id) {
      isExist = true;
    }
  });
  if (isExist == false) {
    arrayLS.push(postId);
    arrayFromLS;
  }
  if (arrayFromLS.length < 1) {
    let object = {
      name: "hello",
      id: arrayLS,
    };
    addItemsToStorage(object);
  } else {
    arrayFromLS.forEach((object) => {
      object.id = arrayLS;
    });
    localStorage.setItem("property", JSON.stringify(arrayFromLS));
  }
  getItemsFromStorage().forEach((object) => {
    getNumber.textContent = object.id.length;
  });
}

getButton.addEventListener("click", addToCardFn);

function getItemsFromStorage(property) {
  let addItemsArray;
  if (localStorage.getItem("property") == null) {
    addItemsArray = [];
  } else {
    addItemsArray = JSON.parse(localStorage.getItem("property"));
  }
  return addItemsArray;
}

function addItemsToStorage(property) {
  let addItemsArray;
  if (localStorage.getItem("property") == null) {
    addItemsArray = [];
  } else {
    addItemsArray = JSON.parse(localStorage.getItem("property"));
  }
  addItemsArray.push(property);
  localStorage.setItem("property", JSON.stringify(addItemsArray));
  return addItemsArray;
}

var dropdown = document.getElementById("header");
function open() {
var menu = document.getElementById("colOne");
menu.style.display = (menu.style.display === 'flex' ? 'none' : 'flex');
}
dropdown.addEventListener("click", open);
