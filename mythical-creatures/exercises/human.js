class Human {
  constructor(name) {
    this.name = name;
    this.encounterCounter = 0;
    this.knockedOut = false;
    if (this.encounterCounter === 6) {
      this.knockedOut = true;
    }
  }
  noticesOgre() {
    if (this.encounterCounter === 3) {
      return true;
    }
    if (this.encounterCounter === 6) {
      this.knockedOut = true;
      return true;
    }
    return false;
  }
}

module.exports = Human;
