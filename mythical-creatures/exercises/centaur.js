class Centaur {
  constructor(centaur) {
    this.name = centaur.name;
    this.breed = centaur.type;
    this.cranky = false;
    this.standing = true;
    this.layingDown = false;
    this.activityCount = 0;
  }
  shootBow() {
    if (this.activityCount < 3 && !this.layingDown) {
      this.activityCount += 1;
    }
    if (this.activityCount === 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!';
    }
    return 'Twang!!!';
  }
  run() {
    if (this.activityCount < 3) {
      this.activityCount += 1;
    }
    if (this.activityCount === 3 || this.layingDown) {
      this.cranky = true;
      return 'NO!';
    }
    return 'Clop clop clop clop!!!';
  }
  sleep() {
    if (this.standing) {
      return 'NO!';
    }
    this.cranky = false;
    this.activityCount = 0;
    return 'ZZZZ';
  }
  layDown() {
    this.layingDown = true;
    this.standing = false;
  }
  standUp() {
    this.layingDown = false;
    this.standing = true;
  }
  drinkPotion() {
    if (this.standing) {
      this.cranky = false;
    } else {
      return "Not while I'm laying down!";
    }
  }
};

module.exports = Centaur;
