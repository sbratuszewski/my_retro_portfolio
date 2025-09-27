class Footer {
  constructor(footerSelector, contentSelector) {
    this.footerSelector = footerSelector;
    this.contentSelector = contentSelector;
    this.footer = document.querySelector(this.footerSelector);
    this.content = document.querySelector(this.contentSelector);
    this.checkAndSetPosition = this.checkAndSetPosition.bind(this);
  }

  init() {
    this.updateYear();
    this.checkAndSetPosition();
    window.addEventListener("resize", this.checkAndSetPosition);
  }

  updateYear() {
    const currentYear = new Date().getFullYear();
    const dateElement = document.querySelector("#date");
    if (dateElement) {
      dateElement.textContent = currentYear;
    }
  }

  checkAndSetPosition() {
    if (!this.footer || !this.content) {
      console.error("Footer or content element not found.");
      return;
    }

    const windowHeight = window.innerHeight;
    const contentHeight = this.content.offsetHeight;
    const footerHeight = this.footer.offsetHeight;

    if (contentHeight + footerHeight < windowHeight) {
      this.footer.style.position = "fixed";
      this.footer.style.bottom = "20px";
      this.footer.style.left = "50%";
      this.footer.style.transform = "translateX(-50%)";
    } else {
      this.footer.style.position = "relative";
      this.footer.style.bottom = "auto";
      this.footer.style.left = "auto";
      this.footer.style.transform = "none";
    }
  }
}

export default Footer;
