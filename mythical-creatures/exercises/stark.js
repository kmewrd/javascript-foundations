const Direwolf = require('./direwolf');

class Stark {
  constructor(stark) {
    this.name = stark.name;
    this.location = stark.area || 'Winterfell';
    this.safe = false;
  }
  sayHouseWords() {
    if (this.safe) {
      return 'The North Remembers';
    }
    return 'Winter is Coming';
  }
  callDirewolf(name, location) {
    var direwolf = new Direwolf(name, location);
    direwolf.starksToProtect.push(this);
    direwolf.home = this.location;
    this.safe = true;
    return direwolf;
  }
};

module.exports = Stark;
