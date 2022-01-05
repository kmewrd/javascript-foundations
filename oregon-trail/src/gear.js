class Gear {
  constructor(type, qty) {
    this.type = type;
    this.quantity = qty;
  }
  checkForValidity() {
    if (this.type === "food" || this.type === "ammunition" || this.type === "clothes") {
      return `Great, we'll need lots of ${this.type}!`;
    } else {
      var invalidType = this.type;
      this.type = null;
      return `I don't think a ${invalidType} will help us.`
    }
  }
}

module.exports = Gear;
