// DESKTOP SCRIPTS
const slidesContainer = document.getElementById("desktop-slides-container");
const cardGroup = document.querySelectorAll(".card-group");
const nextBtn = document.querySelector(".next-btn.arrow");
const prevBtn = document.querySelector(".prev-btn.arrow");
const navigationDots = document.getElementById("desktop-navigation-dots");

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
  // Set active class for Slide Image

  let currentActive = document.querySelector(".card-group.active");
  currentActive.classList.remove("active");
  cardGroup[currentSlide].classList.add("active");

  //   set active class for navigation dots

  let currentDot = document.querySelector(".single-dot.active");
  currentDot.classList.remove("active");
  navigationDots.children[currentSlide].classList.add("active");
}




















// SCRIPTS FOR MOBILE VIEW
const mobileSlidesContainer = document.querySelector(".mobile-slides-container");
const mobileCard = document.querySelectorAll(".slide-card");
const mobileNextBtn = document.getElementById("next-btn");
const mobilePrevBtn = document.getElementById("prev-btn");
const mobileNavigationDots = document.querySelector(".mobile-navigation-dots");


let numberOfMobileCard = mobileCard.length;
let mobileSlideWidth = mobileCard[0].clientWidth;
let mobileCurrentSlide = 0;

// Set up the slider

function  mobileInit() {
  mobileCard.forEach((card, i) => {
    card.style.left = i * 100 + "%";
  });

  mobileCard[0].classList.add("active");

  createNavigationDotsForMobile();
}

mobileInit();

// Create navigation dots

function createNavigationDotsForMobile() {
  for (let i = 0; i < numberOfMobileCard; i++) {
    const mobileDot = document.createElement("div");
    mobileDot.classList.add("single-dot");
    mobileNavigationDots.appendChild(mobileDot);

    mobileDot.addEventListener("click", () => {
      smGoToSlide(i);
    });
  }

 mobileNavigationDots.children[0].classList.add("active");
}

// Next Button

mobileNextBtn.addEventListener("click", () => {
  if (mobileCurrentSlide >= numberOfMobileCard - 1) {
    smGoToSlide(0);
    return;
  }

  mobileCurrentSlide++;
  smGoToSlide(mobileCurrentSlide);
});

// Previous Button

mobilePrevBtn.addEventListener("click", () => {
  if (mobileCurrentSlide <= 0) {
    smGoToSlide(numberOfMobileCard - 1);
    return;
  }

  mobileCurrentSlide--;
  smGoToSlide(mobileCurrentSlide);
});

// Go To Slide

function smGoToSlide(mobileSlideNumber) {
  mobileSlidesContainer.style.transform =
    "translateX(-" + mobileSlideWidth * mobileSlideNumber + "px)";

    mobileCurrentSlide = mobileSlideNumber;

 smSetActiveClass();
}

// Set Active Class

function smSetActiveClass() {
  // Set active class for Slider

  let smCurrentActive = document.querySelector(".slide-card.active");
  smCurrentActive.classList.remove("active");
  mobileCard[mobileCurrentSlide].classList.add("active");

  //   set active class for navigation dots

  let smCurrentDot = document.querySelector(".single-dot.active");
  smCurrentDot.classList.remove("active");
  mobileNavigationDots.children[mobileCurrentSlide].classList.add("active");
}
