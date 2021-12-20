class Ogre {
  constructor(ogre) {
    this.name = ogre.name;
    this.home = ogre.abode || 'Swamp';
    this.swings = 0;
  }
  encounter(human) {
    human.encounterCounter += 1;
    if (human.noticesOgre()) {
      this.swings += 1;
    }
  }
  swingAt(human) {
    this.swings += 1;
  }
  apologize(human) {
    human.knockedOut = false;
  }
}

module.exports = Ogre;
