var {Shop, Item} = require('../src/gilded_rose_changed.js');
describe("Gilded Rose: ordinary item bahaviours", function() {

  it("Checking that item name works", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    
     const items = gildedRose.updateQuality();

    expect(items[0].name).toEqual("foo");
  });

  it("Check that it decreased by 1 BEFORE sellin", function() {
    const gildedRose = new Shop([ new Item("Chicken", 6, 10)]);
     
    let items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(7);
  });
  // Item properties[name, sellBy, Quality]
  it("Check that it decreased by 2 AFTER sellin", function() {
    const gildedRose = new Shop([ new Item("Chicken", 6, 10), new Item('beans',10, 40)]);
     
    let items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });

  it("Check quality is never negative", function() {
    const gildedRose = new Shop([ new Item("Chicken", 0, 10), new Item('beans',10, 40)]);
     
    let items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();
    items = gildedRose.updateQuality();

    expect(items[0].quality).toEqual(0);
  });
});

describe("Checking each special item: ", function() {
  it("Check quality of Sulfuras doesn't change.", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 7, 9) ]);
    
    const items =  gildedRose.updateQuality();

    expect(items[0].quality).toEqual(9);
  });
  /*
  it("Check Conjured items degrade twice as fast.", function() {
    const gildedRose = new Shop([ new Item("Conjured Chicken", 7, 9) ]);
    
    const items =  gildedRose.updateQuality();
    gildedRose.updateQuality();

    expect(items[0].quality).toEqual(9);
  });
  */
  it("Check Aged Brie doesn't exceed quality: 50 : ", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 20, 45) ]);
    
    const items =  gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();
    gildedRose.updateQuality();


    expect(items[0].quality).toEqual(50);
  });


  it("Check Backstage passes doesn';t ", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 12, 0) ]);
    
    const items =  gildedRose.updateQuality(); // +1
    gildedRose.updateQuality(); // +1
    gildedRose.updateQuality(); // +2
    gildedRose.updateQuality(); // +2
    // gildedRose.updateQuality();
    // gildedRose.updateQuality();
    // gildedRose.updateQuality();
    // gildedRose.updateQuality();
    // gildedRose.updateQuality();
    // gildedRose.updateQuality();
    // gildedRose.updateQuality();
    // gildedRose.updateQuality();
    // gildedRose.updateQuality();
    // gildedRose.updateQuality();


    expect(items[0].quality).toEqual(6);
  });
  

})
  



