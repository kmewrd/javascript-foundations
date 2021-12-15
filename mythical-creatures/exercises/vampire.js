class Vampire {
  constructor(name, pet) {
    this.name = name;
    this.pet = pet || "bat";
    this.ouncesDrank = 0;
    this.thirsty = true;
  }
  drink() {
    if (this.ouncesDrank < 50) {
      this.ouncesDrank += 10;
      this.thirsty = false;
    } else {
      this.ouncesDrank += 0;
      this.thirsty = false;
      return "I\'m too full to drink anymore!";
    }
  }
}
module.exports = Vampire;
