class MenuToggle {
  constructor() {
    // Pobierz wszystkie elementy menu i sekcje
    this.menuItems = [...document.querySelectorAll(".menu-item")];
    this.sections = [...document.querySelectorAll("[data-pagename]")];
  }

  init() {
    // Dodaj nasłuchiwanie zdarzeń do każdego elementu menu
    this.menuItems.forEach((item) => {
      item.addEventListener("click", (e) => this.toggleSection(e.target));
    });
  }

  toggleSection(activeItem) {
    // Sprawdź, czy kliknięty element istnieje
    if (!activeItem) return;

    // Dodaj klasę 'active' do klikniętego elementu menu i usuń ją z pozostałych
    this.menuItems.forEach((item) => {
      item.classList.remove("active");
    });
    activeItem.classList.add("active");

    // Pobierz nazwę sekcji z atrybutu data-menu
    const activePageName = activeItem.dataset.menu;

    // Pokaż odpowiednią sekcję na podstawie klikniętego elementu menu
    this.sections.forEach((section) => {
      if (section.dataset.pagename === activePageName) {
        section.style.display = "block"; // Wyświetl sekcję
      } else {
        section.style.display = "none"; // Ukryj pozostałe sekcje
      }
    });
  }
}

export default MenuToggle;
