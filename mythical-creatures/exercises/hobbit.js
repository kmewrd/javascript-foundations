class Hobbit {
  constructor(name, age) {
    this.name = name.name;
    this.age = age || 0;
    this.adult = false;
    this.old = false;

  }
  celebrateBirthday() {
    this.age += 1;
    if (this.age >= 33) {
      this.adult = true;
    }
    if (this.age >= 101) {
      this.adult = true;
      this.old = true;
    }
  }
  getRing() {
    if (this.name === "Frodo") {
      this.hasRing = true;
      return "Here is the ring!";
    } else {
      this.hasRing = false;
      return "You can\'t have it!";
    }
  }
}

module.exports = Hobbit;
