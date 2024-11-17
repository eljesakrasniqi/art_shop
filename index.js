var dropdown = document.getElementById("header");
function open() {
var menu = document.getElementById("colOne");
menu.style.display = (menu.style.display === 'flex' ? 'none' : 'flex');
}
dropdown.addEventListener("click", open);