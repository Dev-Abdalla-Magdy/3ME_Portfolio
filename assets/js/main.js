const linksContainer = document.querySelector(".links_container");
const menuBarBtn = document.querySelector(".menu_bar");
const xBtn = document.querySelector("#X_btn");
const lang = document.querySelector("#lang");

menuBarBtn.addEventListener("click", showMenu);
xBtn.addEventListener("click", closeMenu);

function showMenu() {
  linksContainer.classList.add("active");
}
function closeMenu() {
  linksContainer.classList.remove("active");
}
