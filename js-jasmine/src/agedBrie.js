class AgedBrie {
  constructor(item) {
    this.name = item.name
    this.quality = item.quality
    this.sellIn = item.sellIn
  }

  update() {
    this.sellIn--
    if (this.quality < 50) { this.quality++ }
    if (this.sellIn < 0 && this.quality < 50) { this.quality++ }
  }
}

module.exports = AgedBrie
