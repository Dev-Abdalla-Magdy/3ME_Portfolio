const linksContainer = document.querySelector(".links_container");
const landing = document.querySelector(".landing");
const menuBarBtn = document.querySelector(".menu_bar");
const xBtn = document.querySelector("#X_btn");
const lang = document.querySelector("#lang");
const landingSlider = document.querySelector(".slider");
const landingImages = [
  {
    name: "url(/assets/files/landing_1.jpg)",
  },
  {
    name: "url(/assets/files/landing_2.jpg)",
  },
  {
    name: "url(/assets/files/landing_3.jpg)",
  },
  {
    name: "url(/assets/files/landing_4.jpg)",
  },
  {
    name: "url(/assets/files/landing_5.jpg)",
  },
  {
    name: "url(/assets/files/3ME.jpg)",
  },
];

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
function slideImagseLanding() {
  for (i in landingImages) {
    let singleBar = document.createElement("span");
    singleBar.className = "single_bar";
    landingSlider.appendChild(singleBar);
  }
}

function changeLandingImage() {
  let rNum = Math.floor(Math.random() * landingImages.length - 0.5);
  landing.style.backgroundImage = landingImages[rNum].name;
}
slideImagseLanding();
setInterval(() => {
  changeLandingImage();
}, 5000);
