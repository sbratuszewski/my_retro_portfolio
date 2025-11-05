class TypingEffect {
  #cursor;
  #spanTxt;
  #text;
  #activeLetter;
  #activeText;
  #cursorInterval;

  constructor() {
    this.#cursor = document.querySelector(".cursor");
    this.#spanTxt = document.querySelector(".spanTxt");
    this.#text = [
      "Hi, ",
      "I'm Bogdan, ",
      "a front-end developer. ",
      "Welcome to my website!",
    ];
    this.#activeLetter = -30;
    this.#activeText = 0;
    this.#cursorInterval = null;
  }

  init(onFinishCallback) {
    this.#startCursorAnimation();
    this.#addLetter(onFinishCallback);
  }

  #startCursorAnimation() {
    if (this.#cursor) {
      this.#cursorInterval = setInterval(() => {
        this.#cursor.classList.toggle("active");
      }, 400);
    }
  }

  #stopCursorAnimation() {
    if (this.#cursorInterval) {
      clearInterval(this.#cursorInterval);
      this.#cursorInterval = null;
      if (this.#cursor) {
        this.#cursor.classList.remove("active");
      }
    }
  }

  #addLetter(onFinishCallback) {
    if (this.#spanTxt && this.#activeLetter >= 0) {
      this.#spanTxt.textContent +=
        this.#text[this.#activeText][this.#activeLetter];
    }
    this.#activeLetter++;

    if (this.#activeLetter === this.#text[this.#activeText].length) {
      this.#activeText++;

      if (this.#activeText === this.#text.length) {
        this.#stopCursorAnimation();
        if (onFinishCallback) {
          onFinishCallback();
        }
        return;
      } else {
        setTimeout(() => {
          this.#activeLetter = -10;
          this.#addLetter(onFinishCallback);
        }, 100);
      }
      return;
    }

    setTimeout(() => this.#addLetter(onFinishCallback), 50);
  }
}

export default TypingEffect;
