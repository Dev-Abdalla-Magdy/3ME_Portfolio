const linksContainer = document.querySelector(".links_container");
const menuBarBtn = document.querySelector(".menu_bar");
const xBtn = document.querySelector("#X_btn");
const lang = document.querySelector("#lang");

menuBarBtn.addEventListener("click", showMenu);
xBtn.addEventListener("click", closeMenu);
lang.addEventListener("click", changeLang);

function showMenu() {
  linksContainer.classList.add("active");
}
function closeMenu() {
  linksContainer.classList.remove("active");
}
function changeLang() {
  if (lang.textContent === "Ar") {
    lang.textContent = "En";
  } else {
    lang.textContent = "Ar";
  }
}
