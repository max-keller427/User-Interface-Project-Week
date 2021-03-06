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

// button change //////////////////////////////////
const changeImg = function() {
  const buttonOpen = document.querySelector(".hamburger");
  if (buttonOpen.src === "http://127.0.0.1:5500/img/nav-hamburger.png") {
    buttonOpen.src = "http://127.0.0.1:5500/img/nav-hamburger-close.png";
  } else {
    buttonOpen.src = "http://127.0.0.1:5500/img/nav-hamburger.png";
  }
};

document.querySelector(".hamburger").addEventListener("click", changeImg);

// Tabs Services ////////////////////////////////
class TabLink {
  constructor(element) {
    this.element = element;
    this.data = this.element.dataset.tab;
    this.itemElement = document.querySelector(
      `.tabs-item[data-tab = "${this.data}"]`
    );
    this.tabItem = new TabItem(this.itemElement);
    this.element.addEventListener("click", this.select.bind(this));
  }
  select() {
    const links = document.querySelectorAll(".tabs-link");
    links.forEach(link => link.classList.remove("tabs-link-selected"));
    this.element.classList.add("tabs-link-selected");
    this.tabItem.select();
  }
}

class TabItem {
  constructor(element) {
    this.element = element;
  }
  select() {
    const items = document.querySelectorAll(".tabs-item");
    items.forEach(item => item.classList.remove("tabs-item-selected"));
    this.element.classList.add("tabs-item-selected");
  }
}

let links = document
  .querySelectorAll(".tabs-link")
  .forEach(link => new TabLink(link));
