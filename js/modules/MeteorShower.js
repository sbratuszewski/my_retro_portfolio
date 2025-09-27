class MeteorShower {
  constructor(containerSelector, meteorCount = 10) {
    this.containerSelector = containerSelector;
    this.meteorCount = meteorCount;
    this.container = document.querySelector(this.containerSelector);
    this.meteors = [];
    this.animationFrame = null;
  }

  init() {
    if (!this.container) {
      console.error("Container element not found.");
      return;
    }
    this.createMeteors();
    this.animateMeteors();
  }

  createMeteors() {
    for (let i = 0; i < this.meteorCount; i++) {
      const meteor = document.createElement("div");
      meteor.classList.add("meteor");
      this.container.appendChild(meteor);
      this.meteors.push({
        el: meteor,
        ...this.getMeteorProps(),
      });
      this.resetMeteor(this.meteors[i]);
    }
  }

  getMeteorProps() {
    const maxSize = Math.random() * 10 + 2; // 10-20px
    const speed = Math.random() * 1.5 + 2; // 1.5-3.5 px per frame
    // Start in bottom-left area (left 0-20vw, bottom 80-100vh)
    const startX = Math.random() * window.innerWidth * 0.7;
    const startY = window.innerHeight * (0.7 + Math.random() * 0.3);
    // End in top-right area (right 80-100vw, top 0-20vh)
    const endX = window.innerWidth * (0.8 + Math.random() * 0.2);
    const endY = Math.random() * window.innerHeight * 0.2;
    // Calculate direction vector
    const dx = endX - startX;
    const dy = endY - startY;
    const distance = Math.sqrt(dx * dx + dy * dy);
    return {
      x: startX,
      y: startY,
      dx: dx / distance,
      dy: dy / distance,
      speed,
      size: maxSize,
      maxSize,
      traveled: 0,
      totalDistance: distance,
    };
  }

  resetMeteor(meteorObj) {
    Object.assign(meteorObj, this.getMeteorProps());
    this.updateMeteorStyle(meteorObj);
  }

  updateMeteorStyle(meteorObj) {
    const { el, x, y, size } = meteorObj;
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    el.style.width = `${size}px`;
    el.style.height = `${size}px`;
    el.style.opacity = size / meteorObj.maxSize; // fade out as it shrinks
  }

  animateMeteors() {
    const animate = () => {
      this.meteors.forEach((meteorObj) => {
        meteorObj.x += meteorObj.dx * meteorObj.speed;
        meteorObj.y += meteorObj.dy * meteorObj.speed;
        meteorObj.traveled += meteorObj.speed;
        // Shrink meteor as it travels
        meteorObj.size =
          meteorObj.maxSize *
          (1 - meteorObj.traveled / meteorObj.totalDistance);
        if (
          meteorObj.size <= 1 ||
          meteorObj.x > window.innerWidth ||
          meteorObj.y < 0
        ) {
          this.resetMeteor(meteorObj);
        } else {
          this.updateMeteorStyle(meteorObj);
        }
      });
      this.animationFrame = requestAnimationFrame(animate);
    };
    this.animationFrame = requestAnimationFrame(animate);
  }
}

export default MeteorShower;
