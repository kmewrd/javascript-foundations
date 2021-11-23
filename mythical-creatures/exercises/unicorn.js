class Unicorn {
  constructor(name, color) {
    this.name = name;
    if (color === undefined) {
      this.color = "white";
    } else {
      this.color = color;
    }
    this.isWhite = false;
  }
  isWhite() {
    if (this.color === "white") {
      return true;
    } else {
      return false;
    }
  }
  says(sparkle) {
    return(`**;* ${sparkle} *;**`);
  }
}

module.exports = Unicorn;

// 1. read the test
// 2. ask yourself if it's going to fail and why
// 3. run the test
// 4. make it pass
