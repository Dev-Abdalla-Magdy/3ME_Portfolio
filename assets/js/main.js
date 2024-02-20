const linksContainer = document.querySelector(".links_container");
const menuBarBtn = document.querySelector(".menu_bar");

menuBarBtn.addEventListener("click", showMenu);

function showMenu() {
  if (linksContainer.classList.contains("active")) {
    linksContainer.classList.add("hide");
    linksContainer.classList.remove("active");
  } else {
    linksContainer.classList.add("active");
    linksContainer.classList.remove("hide");
  }
}
