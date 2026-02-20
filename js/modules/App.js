import Footer from "./Footer.js";
import TypingEffect from "./TypingEffect.js";
import MenuToggle from "./MenuToggle.js";
import MeteorShower from "./MeteorShower.js";
import ProjectsItem from "./ProjectsItem.js";

class App {
  constructor() {
    this.footer = new Footer("footer", ".container");
    this.typingEffect = new TypingEffect();
    this.menuToggle = new MenuToggle();
    this.meteorShower = new MeteorShower(".meteor-container", 20);
    this.projectsItem = new ProjectsItem();
  }

  init() {
    this.createMeteorContainer();
    this.footer.init();
    this.hideMenuAndContent();
    this.typingEffect.init(() => {
      console.log("TypingEffect finished");
      this.startFadeOutAnimation();
    });
    this.projectsItem.init();
  }

  createMeteorContainer() {
    const meteorContainer = document.createElement("div");
    meteorContainer.classList.add("meteor-container");
    meteorContainer.style.opacity = "0";
    document.body.appendChild(meteorContainer);
  }

  hideMenuAndContent() {
    const menu = document.querySelector(".menu");
    const sections = document.querySelectorAll("[data-pagename]");
    const meteorContainer = document.querySelector(".meteor-container");

    if (menu) {
      menu.style.display = "none";
    }

    sections.forEach((section) => {
      section.style.display = "none";
    });

    if (meteorContainer) {
      meteorContainer.style.opacity = "0";
    }
  }

  startFadeOutAnimation() {
    const spanContainer = document.querySelector(".span-container");
    if (spanContainer) {
      spanContainer.classList.add("fade-out");
      spanContainer.addEventListener("transitionend", () => {
        console.log("Fade-out animation finished");
        spanContainer.style.display = "none";
        this.showMenuAndContent();
      });
    }
  }

  showMenuAndContent() {
    const menu = document.querySelector(".menu");
    const section = document.querySelector('[data-pagename="bio"]');
    const meteorContainer = document.querySelector(".meteor-container");

    if (menu) {
      menu.style.display = "flex";
    }

    if (section) {
      section.style.display = "block";
    }

    const menuItem = document.querySelector('.menu-item[data-menu="bio"]');
    if (menuItem) {
      menuItem.classList.add("active");
    }

    this.menuToggle.init();

    //start meteor animation
    this.startMeteorAnimation();
  }

  startMeteorAnimation() {
    const meteorContainer = document.querySelector(".meteor-container");
    if (meteorContainer) {
      setTimeout(() => {
        meteorContainer.style.opacity = "1";
        this.meteorShower.init();
      }, 500);
    }
  }
}

export default App;
