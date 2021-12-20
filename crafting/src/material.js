class Material {
  constructor(name, price, amt, units) {
    this.name = name;
    this.price = price;
    this.amount = amt;
    this.units = units;
  }
  useMaterial(amt) {
    if (this.amount > amt) {
      this.amount -= amt;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
    }
    return `You don't have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
  }
  calculateMaterialCost() {
    return this.price * this.amount;
  }
}

module.exports = Material;
