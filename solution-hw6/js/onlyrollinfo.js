const rolls = {
    "Original": {
        "basePrice": 2.49,
        "imageFile": "original-cinnamon-roll.jpg"
    },
    "Apple": {
        "basePrice": 3.49,
        "imageFile": "apple-cinnamon-roll.jpg"
    },
    "Raisin": {
        "basePrice": 2.99,
        "imageFile": "raisin-cinnamon-roll.jpg"
    },
    "Walnut": {
        "basePrice": 3.49,
        "imageFile": "walnut-cinnamon-roll.jpg"
    },
    "Double-Chocolate": {
        "basePrice": 3.99,
        "imageFile": "double-chocolate-cinnamon-roll.jpg"
    },
    "Strawberry": {
        "basePrice": 3.99,
        "imageFile": "strawberry-cinnamon-roll.jpg"
    }    
};
  // prices and glazing 
  let Alloptions=[
  {
    name: 'Keep original',
    price: 0.00,
  },
  {
    name: 'Sugar milk',
    price: 0.00,
  },
  {
    name: 'Vanilla Milk',
    price:0.50,
  
  },
  {
    name: 'Double Chocolate',
    price:1.50,
  },
];
  // the pack options that are available and their prices
  let packoptions=[
  {
    name:1,
    price:1.00,
  },
  {
    name:3,
    price:3.00,
  
  },
  {
    name:6,
    price:5.00,
  },
  {
    name:12,
    price:10,
  },
];

class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;

    }

    calculatePrice() {
        let glazingprice=0;
        let packprice=1;
        for (let i in Alloptions){
          if (Alloptions[i].name==this.glazing){
            glazingprice=Alloptions[i].price;
      
            break;
          }
        }
        for (let i in packoptions){
          if (packoptions[i].name==this.size){
            packprice=packoptions[i].price;
            
            break;
          }
        }
    
      return((this.basePrice+glazingprice)*packprice);
    }
}