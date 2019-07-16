class ProgressBar {
  constructor(element, currentcal, requiredCal) {
    this.valueElem = element.querySelector("#value");
    this.fillElem = element.querySelector("#fill");
    this.characterElem = element.querySelector("#character");
    this.requiredCal = requiredCal;
  }

  update(currentCal) {
    const percentage = (currentCal / this.requiredCal) * 100;
    this.fillElem.style.width = percentage + "%";
    this.valueElem.textContent = percentage + "%";
    if (percentage < 90) {
      this.characterElem.src = "./skinny.png";
    }
    if (percentage > 90 && percentage < 110) {
      this.characterElem.src = "./normal.png";
    }
    if (percentage > 110) {
      this.characterElem.src = "./fat.png";
    }
  }
}
