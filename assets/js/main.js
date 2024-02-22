const linksContainer = document.querySelector(".links_container");
const landing = document.querySelector(".landing");
const menuBarBtn = document.querySelector(".menu_bar");
const xBtn = document.querySelector("#X_btn");
const lang = document.querySelector("#lang");
const landingSlider = document.querySelector(".slider");
const landingImages = [
  {
    id: 0,
    name: "url(/assets/files/3ME_0.jpg)",
  },
  {
    id: 1,
    name: "url(/assets/files/3ME_1.jpg)",
  },
  {
    id: 2,
    name: "url(/assets/files/3ME_2.jpg)",
  },
  {
    id: 3,
    name: "url(/assets/files/3ME_3.jpg)",
  },
  {
    id: 4,
    name: "url(/assets/files/3ME_4.jpg)",
  },
  {
    id: 5,
    name: "url(/assets/files/3ME_5.jpg)",
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

  const allBullets = document.querySelectorAll(".single_bar");

  for (let j = 0; j < landingImages.length; j++) {
    allBullets[j].id = j;
  }
}

function changeLandingImage() {
  const allBullets = document.querySelectorAll(".single_bar");
  let rNum = Math.floor(Math.random() * landingImages.length);
  landing.style.backgroundImage = landingImages[rNum].name;
  if (landingImages[rNum].id === parseInt(allBullets[rNum].id)) {
    allBullets.forEach((item) => item.classList.remove("active"));
    allBullets[rNum].classList.add("active");
  }
}

slideImagseLanding();
setInterval(changeLandingImage, 6000);
