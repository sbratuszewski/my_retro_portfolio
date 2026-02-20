class MenuToggle {
  constructor() {
    this.menuItems = [...document.querySelectorAll(".menu-item")];
    this.sections = [...document.querySelectorAll("[data-pagename]")];
  }

  init() {
    this.menuItems.forEach((item) => {
      item.addEventListener("click", (e) => this.toggleSection(e.target));
    });
  }

  toggleSection(activeItem) {
    if (!activeItem) return;

    this.menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    activeItem.classList.add("active");

    const activePageName = activeItem.dataset.menu;

    this.sections.forEach((section) => {
      if (section.dataset.pagename === activePageName) {
        section.style.display = "block";
      } else {
        section.style.display = "none"; 
      }
    });
  }
}

export default MenuToggle;
