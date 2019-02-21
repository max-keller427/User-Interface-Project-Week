// JS goes here
// Dropdown Nav Bar ////////////////////////////////
class Dropdown {
  constructor(element) {
    this.element = element;
    this.button = element.querySelector(".dropdown-button");
    this.content = element.querySelector(".nav-links");
    this.button.addEventListener("click", () => {
      this.toggleContent();
    });
  }
  toggleContent() {
    this.content.classList.toggle("nav-links-hidden");
  }
}

let dropDowns = document
  .querySelectorAll(".dropdown")
  .forEach(link => new Dropdown(link));

const changeImg = function() {
  button.src = "..img/nav-hamburger-close.png";
};

let button = document.querySelector(".dropdown-button");
button.addEventListener("click", changeImg());

// Tabs Services ////////////////////////////////
