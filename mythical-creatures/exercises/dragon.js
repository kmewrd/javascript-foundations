class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.food = 0;
    this.hungry = true;
  }
  greet(rider) {
    return `Hi, ${this.rider}!`;
  }
  // Unsure about code below this line
  eat() {
    this.food = this.food + 1;
    if (this.food < 3) {
      this.hungry = true;
    } else {
      this.hungry = false;
    }
  }
}
module.exports = Dragon;
