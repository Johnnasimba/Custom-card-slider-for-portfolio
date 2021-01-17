
// SCRIPTS FOR MOBILE VIEW
const mobileSlidesContainer = document.querySelector(".mobile-slides-container");
const mobileCard = document.querySelectorAll(".mobile-card");
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

  let smCurrentActive = document.querySelector(".card.active");
  smCurrentActive.classList.remove("active");
  mobileCard[mobileCurrentSlide].classList.add("active");

  //   set active class for navigation dots

  let smCurrentDot = document.querySelector(".single-dot.active");
  smCurrentDot.classList.remove("active");
  mobileNavigationDots.children[mobileCurrentSlide].classList.add("active");
}
