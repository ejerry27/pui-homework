// database for the rolls

// the data given to us for each roll that consists of name, price and image file 
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
  },];
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

let cart=new Set();
//defining class roll
class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
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

//creating objects of class roll

const roll1= new Roll('Original','Sugar Milk',1,2.49);
cart.add(roll1);
const roll2=new Roll('Walnut','Vanilla Milk',12,3.49);
cart.add(roll2);
const roll3=new Roll('Raisin','Sugar Milk',3,2.99);
cart.add(roll3);
const roll4=new Roll('Apple','Original',3,3.49);
cart.add(roll4);
console.log(cart);

//iterating through the cart 

for (const newroll of cart){
    console.log(newroll);
    createElement(newroll)
}
function createElement(newroll){
  //using the template method
    const template=document.querySelector('#shopping-cart-temp');
    const copyroll=template.content.cloneNode(true);
    newroll.element=copyroll.querySelector('.shopping-cart-maincontainer');
    const rollelement=document.querySelector('#shopping-cart-frame');
    rollelement.prepend(newroll.element);
    updateElement(newroll);
    //remove button fun
    const removebtn=document.querySelector("#remove");
    removebtn.addEventListener('click',()=>{
      removeRoll(newroll);
    });
 }
// creating the html elements
 function updateElement(newroll){
    const rollimageelement=newroll.element.querySelector('#imgs');
    // image file 
    let sm=newroll["type"];
    let imgfile=rolls[sm]["imageFile"];
    rollimageelement.src ="../assets/products/"+ imgfile;
    // roll title 
    const rolltitle=newroll.element.querySelector('#roll-title');
    rolltitle.innerText=newroll["type"]+" Cinnamon Roll";
    // the glazing is displayed
    const rollglaze=newroll.element.querySelector("#glazing-type");
    rollglaze.innerText="Glazing: "+newroll["glazing"];
    // the pack size is displayed
    const packchoice=newroll.element.querySelector('#pack-size');
    packchoice.innerText="Pack Size: "+newroll['size'];
    // computing the calculated price of the roll
    const calculatedprice=newroll.element.querySelector('#calc-price');
    calculatedprice.innerText="$ "+newroll.calculatePrice().toFixed(2);
    updateTotalPrice();
 }  

 //updating the total price in the shopping cart 
function updateTotalPrice(){
  let totalcost=0;
  cart.forEach(newroll=>{
    totalcost+=newroll.calculatePrice();
  });
  const totalprice=document.querySelector("#price");
  totalprice.innerText="$"+totalcost.toFixed(2);
}
//function to remove the items from the cart
function removeRoll(newroll){
    newroll.element.remove();
    cart.delete(newroll);
    updateTotalPrice();
}
