let itemList = document.getElementById("item-list");
console.log(itemList, "itemlist");

let img;
fetch("./picture.json")
  .then((respose) => {
    return respose.json();
  })
  .then((data) => {
    data.forEach((picture) => {
      img = document.createElement("img");

      let li = document.createElement("li");
      li.setAttribute("class", "item");

      let divTwo = document.createElement("div");
      divTwo.setAttribute("class", "text");
      let text = document.createElement("h1");
      let price = document.createElement("h2");
      price.textContent = picture.price;
      text.textContent = picture.name;

      let button = document.createElement("a");
      button.setAttribute("href", `details.html?id=${picture.id}`);
      button.setAttribute("class", "add-cart");
      button.textContent = "See details";

      divTwo.appendChild(text);
      divTwo.appendChild(price);
      divTwo.appendChild(button);
      itemList.appendChild(li);
      li.appendChild(img);
      li.appendChild(divTwo);
      img.setAttribute("src", picture.img);
      console.log(picture);
    });
  });

let filter = document.getElementById("filterInput");
console.log(filter);

function filterFn(item) {
  let filterInputValue = item.target.value.toLowerCase();
  let createdItems = document.querySelectorAll("#item-list .item");
  createdItems.forEach((item) => {
    let textElement = item.querySelector(".text h1");
    let itemName = textElement.textContent.toLowerCase();
    if (itemName.indexOf(filterInputValue) === -1) {
      item.style.display = "none";
    } else {
      item.style.display = "flex";
    }
  });
}
var dropdown = document.getElementById("header");
function open() {
var menu = document.getElementById("colOne");
menu.style.display = (menu.style.display === 'flex' ? 'none' : 'flex');
}
dropdown.addEventListener("click", open);
filter.addEventListener("input", filterFn);
clearAll.addEventListener("click", removeAllItems);