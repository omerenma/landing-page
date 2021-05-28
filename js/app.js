/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav

// Get all the sections
const allSections = document.querySelectorAll("section");
const back = document.getElementById("top");

allSections.forEach((section) => {
  const ul = document.getElementById("navbar__list");
  const li = document.createElement("li");
  li.setAttribute("class", "menu__link");
  const anchor = document.createElement("a");
  anchor.setAttribute("href", "#" + section.id);
  // Set anchor text content and convert to uppercase
  anchor.textContent = section.dataset.nav.toUpperCase();
  li.appendChild(anchor);
  //   ul.appendChild(anchor);
  ul.appendChild(li);
});

// Add class 'active' to section when near top of viewport

const viewPort = () => {
  allSections.forEach((section) => {
    const elePos = section.getBoundingClientRect();
    const activeState = document.getElementById(section.id);
    console.log(activeState, "active");
    elePos.y <= 80 && elePos.bottom >= 140
      ? section.classList.add("active")
      : section.classList.remove("active");
  });
};

// Scroll to anchor ID using scrollTO event
window.onscroll = () => {
  //scrollFunction();
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    back.style.cssText = "display:block; transition:2s";
  } else {
    back.style.display = "none";
  }
};

/**
 * End Main Functions
 * Begin Events
 *
 */
document.addEventListener("scroll", viewPort);
