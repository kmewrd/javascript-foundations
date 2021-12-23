class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }
  putCandyInBag(candy) {
    this.bag.candies.push(candy);
    this.bag.count += 1;
    this.countCandies += 1;
    this.hasCandy = true;
  }
  eat() {
    this.bag.candies.pop();
    this.bag.count -= 1;
    this.countCandies -= 1;
    if (!this.countCandies) {
      this.hasCandy = false;
    }
  }
}

module.exports = TrickOrTreater;
