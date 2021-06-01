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
const allSections = document.querySelectorAll('section');
const back = document.getElementById('top');

allSections.forEach((section) => {
  const ul = document.getElementById('navbar__list');
  const li = document.createElement('li');
  li.setAttribute('class', 'menu__link');
  const anchor = document.createElement('a');
  anchor.setAttribute('href', '#' + section.id);
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
    elePos.y <= 80 && elePos.bottom >= 140
      ? section.classList.add('active')
      : section.classList.remove('active');
  });
};

// Scroll to anchor ID using scrollTO event
window.onscroll = () => {
  //scrollFunction();
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    back.style.cssText = 'display:block';
  } else {
    back.style.display = 'none';
  }
};
back.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

/**
 * End Main Functions
 * Begin Events
 *
 */
document.addEventListener('scroll', viewPort);

// Media query

document.addEventListener('DOMCOntentLoaded', () => {
  document.getElementsByTagName('h1').forEach((each) => {
    each.addEventListener('mouseover', () => {
      each.style.color = 'blue';
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  const open = document.getElementById('open');
  const close = document.getElementById('close');
  const ul = document.getElementById('navbar__list');
  open.addEventListener('click', () => {
    ul.classList.add('open');
    open.style.display = 'none';
    close.style.display = 'block';
  });

  close.addEventListener('click', () => {
    ul.classList.remove('open');
    close.classList.add('close');
    open.style.display = 'block';
  });
});

const head = document.querySelector('#create-head');

// Highlight Menu item on scroll
const section = document.querySelectorAll('section');
const navLi = document.querySelectorAll('ul ');

window.addEventListener('scroll', () => {
  let currentSection = '';
  section.forEach((section) => {
    const secTop = section.offsetTop;
    // Get section height
    const secHeight = section.clientHeight;
    if (pageYOffset > secTop) {
      currentSection = section.getAttribute('id');
    }
  });
  navLi.forEach((li) => {
    if (currentSection === 'section1') {
      li.firstElementChild.classList.add('home');
    } else {
      li.firstElementChild.classList.remove('home');
    }
    if (currentSection === 'section2') {
    } else {
    }

    if (currentSection === 'section3') {
    } else {
    }

    if (currentSection === 'section4') {
      li.lastElementChild.classList.add('contact');
    } else {
      li.lastElementChild.classList.remove('contact');
    }
  });
});

// Smooth scroll
const nav_anchor = document.querySelectorAll('ul li a');
nav_anchor.forEach((anchor) => {
  anchor.addEventListener('click', (e) => {
    e.preventDefault();
    if (e.target.hash === '#section1') {
      window.scrollBy({
        top: 400,
        behavior: 'smooth',
      });
    } else if (e.target.hash === '#section2') {
      window.scrollBy({
        top: 1000,
        behavior: 'smooth',
      });
    } else if (e.target.hash === '#section3') {
      window.scrollBy({
        top: 1600,
        behavior: 'smooth',
      });
    } else if (e.target.hash === '#section4') {
      window.scrollBy({
        top: 2300,
        behavior: 'smooth',
      });
    }
  });
});
