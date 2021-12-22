class Roadrace {
  constructor(race) {
    this.name = race.title;
    this.location = race.city;
    this.participants = [];
  }
  setDistance(miles) {
    this.distance = miles;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`
  }
  registerParticipants(runner) {
    this.participants.push(runner);
  }
  completeRace() {
    for (var i = 0; i < this.participants.length; i++) {
      this.participants[i].completedRaces.push(this.name);
      this.participants[i].runSomeMiles(this.distance);
    }
  }
}

module.exports = Roadrace;
