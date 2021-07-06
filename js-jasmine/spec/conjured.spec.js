const Shop = require('../src/shop.js');
const Item = require('../src/item.js');

describe("Conjured Items", function() {

  it("quality decreases by 2", function() {
    const conjuredItem = new Item("Conjured Mana Cake", 3, 6)
    const items = [conjuredItem]
    const gildedRose = new Shop(items);
    gildedRose.updateQuality();

    expect(conjuredItem.sellIn).toEqual(2)
    expect(conjuredItem.quality).toEqual(4)
  })

  it("quality decreases by 4", function() {
    const conjuredItem = new Item("Conjured Mana Cake", 0, 5)
    const items = [conjuredItem]
    const gildedRose = new Shop(items);
    gildedRose.updateQuality();

    expect(conjuredItem.sellIn).toEqual(-1)
    expect(conjuredItem.quality).toEqual(1)
  })

  it("quality min 0", function() {
    const conjuredItem = new Item("Conjured Mana Cake", 0, 3)
    const items = [conjuredItem]
    const gildedRose = new Shop(items);
    gildedRose.updateQuality();

    expect(conjuredItem.sellIn).toEqual(-1)
    expect(conjuredItem.quality).toEqual(0)
  })
})
