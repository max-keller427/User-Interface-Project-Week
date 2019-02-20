// JS goes here

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
