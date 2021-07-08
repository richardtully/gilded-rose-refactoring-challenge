class Item {   // don't change this class!
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn; 
    this.quality = quality;
  }
}

class Shop {
  constructor(items=[]){
    this.items = items; // don't change this property!
  }

  // Aged Brie
  // sulfuras
  // backstage passes
  // conjured items
  
  // [item,sellBy,Quality ]
  
  // if sellby = 0 , qual deg x2
  // 0 =< qual =< 50
  // qual -= 1 each day (assumption)
  
  // use switch instead of nested if statements
  // seperate normal item decay from specail item decay
  //Create more methods

  // // if !a
  //      if b
  //       if c
  //       do this
  //     else do this
  //   else 


  specialItems = ["Aged Brie", "Backstage passes to a TAFKAL80ETC concert","Sulfuras, Hand of Ragnaros" ];

  qualityCheck(qual)
  { 
    if (0 > qual < 50  )
    { 
      return true;
    }
  }
  
  specialItemChecker(name )
  {
    if (this.specialItems.includes(name))
    { 
      return true;
    }

  }
  updateQuality() { 
    for (var i = 0; i < this.items.length; i++) {
      // check its not a special item & check quality is not below 0
      // lets make a method that checks if special item
      // check quality is not over 50 not under 0
      //  console.log(`item: ${this.items[i].name} equals :  ${!this.specialItems.includes(this.items[i].name)}`);
      if (!this.specialItems.includes(this.items[i].name)  && this.qualityCheck(this.items[i].quality)  ) 
      {this.items[i].quality--; }
      // if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
      //   if (this.items[i].quality > 0 ) { 
      //     if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
            
      //       this.items[i].quality--;
      //     }
      //   }
      // }
       else {
        if (this.items[i].quality < 50) {
          this.items[i].quality ++;
          if (this.items[i].name == 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality++;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality++;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
        this.items[i].sellIn--;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'Backstage passes to a TAFKAL80ETC concert') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras, Hand of Ragnaros') {
                this.items[i].quality --;
              }
            }
          } else {
            this.items[i].quality = 0;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality++;
          }
        }
      }
    }

    return this.items;
  }


  nameChecker( )
  { 

    
  }
}
module.exports = {
  Item,
  Shop
}




