
// NOTICE: This project section is incomplete.It will be completed 
// as soon as there is more than two card groups such that all the functionalities 
// are working fully


const slidesContainer = document.querySelector(".slides-container");
const cardGroup = document.querySelectorAll(".card-group");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const navigationDots = document.querySelector(".navigation-dots");
const card = document.querySelector(".card");

let numberOfCardGroups = cardGroup.length;
let slideWidth = cardGroup[0].clientWidth;
let currentSlide = 0;

// Set up the slider

function init() {
  /*   
    cardGroup[0] = 0
    cardGroup[1] = 100%
    cardGroup[2] = 200%
    */

  cardGroup.forEach((card, i) => {
    card.style.left = i * 100 + "%";
  });

  cardGroup[0].classList.add("active");

  createNavigationDots();
}

init();

// Create navigation dots

function createNavigationDots() {
  for (let i = 0; i < numberOfCardGroups; i++) {
    const dot = document.createElement("div");
    dot.classList.add("single-dot");
    navigationDots.appendChild(dot);

    dot.addEventListener("click", () => {
      goToSlide(i);
    });
  }

  navigationDots.children[0].classList.add("active");
}

// Next Button

nextBtn.addEventListener("click", () => {
  if (currentSlide >= numberOfCardGroups - 1) {
    goToSlide(0);
    return;
  }

  currentSlide++;
  goToSlide(currentSlide);
});

// Previous Button

prevBtn.addEventListener("click", () => {
  if (currentSlide <= 0) {
    goToSlide(numberOfCardGroups - 1);
    return;
  }

  currentSlide--;
  goToSlide(currentSlide);
});

// Go To Slide

function goToSlide(slideNumber) {
  slidesContainer.style.transform =
    "translateX(-" + slideWidth * slideNumber + "px)";

  currentSlide = slideNumber;

  setActiveClass();
}

// Set Active Class

function setActiveClass() {
  // Set active class for Slider

  let currentActive = document.querySelector(".card-group.active");
  currentActive.classList.remove("active");
  cardGroup[currentSlide].classList.add("active");

  //   set active class for navigation dots

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}
