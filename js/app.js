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
/*const navbar = document.getElementById("navbar__list"); //create unordered list*/

const navbarSections = document.querySelectorAll("section"); //grab all element sections from the HTML
const section = document.querySelectorAll(".landing__container"); //grab all the class of landing-container from HTML
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
function sectionScroll(section) {
  section.scrollIntoView();
} // calls each section to see if it is in the viewport
function navbarBuild() {
  const navbar = document.getElementById("navbar__list"); // grabbing the ul to start the navbar menu
  navbarSections.forEach((section, i) => {
    const listItem = document.createElement("li"); // creates a li element for the nav menu
    const listLink = document.createElement("a"); //creates an a element for the nav menu
    const navInfo = document.querySelector("h2").textContent; // creates variable to store section topings text cotent
    listLink.classList.add("menu_link"); // calls the clases from listLink and adds to the link of the item
    listLink.href = `#section${i + 1}`; // anchors the link for the item
    listLink.textContent = `Section${i + 1}`;
    listItem.appendChild(listLink); //adds on at the end the a element
    navbar.appendChild(listItem); //adds on the li element
  });
}
navbarBuild(); //calls the build nav function
// Add class 'active' to section when near top of viewport
const activeRemove = (section) => {
  section.classList.remove("your-active-class");
}; //removes the "your-active-class" from a section if it is not active

const activeAdd = (condition, section) => {
  if (condition) {
    section.classList.add("your-active-class");
  }
}; // adds the class "your-active-class" to the section that is in the viewport
const activeSection = () => {
  navbarSections.forEach((section) => {
    const divBorderTop = section.getBoundingClientRect().top; //find the (x,y) top of each section
    const divBorderBottom = section.getBoundingClientRect().bottom; //find the (x,y) bottom of each section
    inviewport = () => divBorderTop < 100 && divBorderBottom >= 100; // if the section is true for both, then sets it as active
    activeRemove(section);
    activeAdd(inviewport(), section);
  });
};

// Scroll to anchor ID using scrollTO event
function menuScroll() {
  const navbarScroll = document.getElementById("navbar_list");
  navbarScroll.scrollIntoView(); //gives nav bar a smooth scroll when clicking links on nav bar
}
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

//Set Actions as active
window.addEventListener("scroll", activeSection);

//i

// create a function to scroll to top
const scrollToTop = function () {
  const scrollTopButton = document.createElement("button"); //create button element
  scrollTopButton.textContent = "TOP"; //sets element text to "TOP"
  scrollTopButton.setAttribute("id", "scroll-btn"); // gives the button an ID of "scroll-btn"
  document.body.appendChild(scrollTopButton); //puts the button into HTML body
  const scrollTopButtonAppear = function () {
    document.body.scrollTop > 60 || document.documentElement.scrollTop > 60 // if the document scroll is > 60
      ? (scrollTopButton.style.display = "block") // then display the scroll to top button as block
      : (scrollTopButton.style.display = "none"); //else do not display the button
  };
  window.addEventListener("scroll", scrollTopButtonAppear); // add event listener to scroll with scroll to top button appear fuction
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  scrollTopButton.addEventListener("click", topFunction);
};
// call the scroll to top button

scrollToTop();
