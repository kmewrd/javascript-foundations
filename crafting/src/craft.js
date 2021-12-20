class Craft {
  constructor(craft) {
    this.name = craft.type;
    this.materials = craft.materials;
    this.completed = false;
  }
  completeCraft() {
    this.completed = true;
    return "All done! It looks great!"
  }
  calculateProjectTotal() {
    var totalAmount = 0;
    for (var i = 0; i < this.materials.length; i++) {
      totalAmount += this.materials[i].calculateMaterialCost();
    }
    return totalAmount;
  }
}

module.exports = Craft;
