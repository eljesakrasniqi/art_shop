// let getPrice = document.getElementById("cart-total");
// let totalPrice = 0;
let container = document.getElementById("container");
let mainRow = document.getElementById("mainRow")
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
            let row = document.createElement("div");
            row.setAttribute("class", "row");
            
            let bigColOne = document.createElement("div");
            bigColOne.setAttribute("class", "bigCol");

            let bigColTwo = document.createElement("div");
            bigColTwo.setAttribute("class", "bigCol");

            let imgCol = document.createElement("div");
            imgCol.setAttribute("class", "col")

            let textCol = document.createElement("div");
            textCol.setAttribute("class", "col")
            textCol.setAttribute("class", "text")

            let priceCol = document.createElement("div")
            priceCol.setAttribute("class", "col")

            let img = document.createElement("img");
            img.setAttribute("src", picture.img);
            img.className = "pictureImage";

            let name = document.createElement("h2")
            name.setAttribute("class", "name")
            name.textContent = picture.name

            let size = document.createElement("h4");
            size.setAttribute("class", "size")
            size.textContent = picture.size;

            let state = document.createElement("h4");
            state.setAttribute("class", "state")
            state.textContent = picture.state;

            let material = document.createElement("h4")
            material.setAttribute("class", "material")
            material.textContent = picture.material

            let price = document.createElement("h2");
            price.setAttribute("class", "price")
            price.textContent = picture.price

            imgCol.appendChild(img)
            textCol.appendChild(name)
            textCol.appendChild(size)
            textCol.appendChild(material)
            textCol.appendChild(state)
            priceCol.appendChild(price)
  
            bigColOne.appendChild(imgCol)
            bigColOne.appendChild(textCol)
            bigColOne.appendChild(priceCol)
        

            row.appendChild(bigColOne)
            row.appendChild(bigColTwo)

            container.appendChild(row)
          }
        });
      });
    });
  });
function getItemsFromStorage(property) {
  let addItemsArray;
  if (localStorage.getItem("property") == null) {
    addItemsArray = [];
  } else {
    addItemsArray = JSON.parse(localStorage.getItem("property"));
  }
  return addItemsArray;
}
