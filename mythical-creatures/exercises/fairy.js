class Fairy {
  constructor(fairy) {
    this.name = fairy;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    }
    this.disposition = 'Good natured';
    this.humanWards = [];
  }
  receiveBelief() {
    this.dust += 1;
  }
  believe() {
    this.dust += 10;
  }
  makeDresses(dresses) {
    for (var i = 0; i < dresses.length; i++) {
      this.clothes.dresses.push(dresses[i]);
    }
  }
  becomeProvoked() {
    this.disposition = 'Vengeful';
  }
  replaceInfant(infant) {
    if (this.disposition === 'Vengeful') {
      this.humanWards.push(infant);
      infant.disposition = 'Malicious';
    } else {
      return infant;
    }
    if (this.humanWards.length === 3) {
      this.disposition = 'Good natured';
    }
  }
}

module.exports = Fairy;
