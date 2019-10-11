class GuessingGame {
    constructor() {
        this.number = undefined;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;

    }

    guess() {
      this.number = Math.round((this.max-this.min)/2 + this.min);
      return this.number;
    }

    lower() {
      this.max = this.number;
      this.number = Math.round((this.number-this.min)/2 + this.min);
      return this.number;

    }

    greater() {
      this.min = this.number;
      this.number = Math.round(this.max - (this.max-this.number)/2);
      return this.number;

    }
}

module.exports = GuessingGame;
