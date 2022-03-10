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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */
const navbar = document.getElementById("navbar__list"); //create unordered list
const navbarSections = Array.from(document.getElementsByTagName("section")); // select sections
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
for (let navbarSection of navbarSections) {
  navbar;
  const listItem = document.createElement("li");
  listItem.setAttribute("class", "menu_link");
  const listLink = document.createElement("a");
  listLink.textContent = section.dataset.nav;
  listItem.appendChild(listLink);
  navbar.appendChild(listItem);
}

// Add class 'active' to section when near top of viewport

// Scroll to anchor ID using scrollTO event

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active
