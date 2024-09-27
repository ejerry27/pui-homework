
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
// defining class roll 
class Roll {
    constructor(rollType, rollGlazing, packSize, basePrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = basePrice;
    }
}
// getting the specific roll from the roll
const queryString = window.location.search;
const params = new URLSearchParams(queryString);
const rollType = params.get('roll');

if (rollType in rolls){
    const headerElement = document.querySelector('#headerdet');
    headerElement.textContent = rollType+" Cinnamon Roll";
    const basePrice=document.querySelector('#cost1');
    basePrice.textContent= "$"+rolls[rollType]["basePrice"];
    const rollImage = document.querySelector('#imgs');
    rollImage.src ="../assets/products/"+ rolls[rollType]["imageFile"];

}
// being able to access the respective queries in HTML file
const glazeselect=document.querySelector("#glazingOptions");
const packselect=document.querySelector("#pack");
const totalpriceSpan=document.querySelector("#cost1");
// for loops for dynamically populating pack and glazing drop downs
for(let i=0;i<packoptions.length;i++){
  const pack=packoptions[i];
  const options=document.createElement('option');
  options.value=pack.price;
  options.textContent=pack.name;
  packselect.appendChild(options);
}
for (let i =0;i<Alloptions.length;i++){
  const glazingpick=Alloptions[i];
        //creating the element 
  const options=document.createElement('option');
  options.value=glazingpick.price;
  options.textContent=glazingpick.name;
        //apending the item to the drop down list 
  glazeselect.appendChild(options);
}
   
function calculateTotalPrice(){
  const glazingprice=parseFloat(glazeselect.value);
  const packPrice=parseInt(packselect.value);
  // const extractprice=rolls[rollType]["basePrice"];
  // const priceChange=extractprice*packPrice;
  const priceChange=(rolls[rollType]["basePrice"]+glazingprice)*packPrice;
  // const priceChange=(basePrice+glazingprice)*packPrice;
  //assigning this back to the html query and rounding up to 2 decimal points
  totalpriceSpan.textContent="$ "+priceChange.toFixed(2);
}
window.glazingChange=function(element){
  const priceChange=parseFloat(element.value);
  calculateTotalPrice();
}
const cart=[];
// function to add to array
function addtoarray(){
  // getting all the required elements of the roll in order to add to the arry
  let glazeselectdropdown=document.getElementById("glazingOptions");
  const rollGlazing=glazeselectdropdown.options[glazeselectdropdown.selectedIndex].text;
  let idstuff=document.getElementById("pack");
  const packSize=idstuff.options[idstuff.selectedIndex].text;
  const packPrice=rolls[rollType]["basePrice"];
// creating an instance of the class Roll
  const newRoll=new Roll(rollType,rollGlazing,packSize,packPrice);
  cart.push(newRoll);
  console.log(cart);
}
// event of change and what function is called after 
glazeselect.addEventListener('change',glazingChange);
packselect.addEventListener('change',calculateTotalPrice);
// checkoutbutton.addEventListener('click',addtoarray);
const addToCartButton = document.getElementById('addtocart');
// if the button is present in the page then the addtoarray function takes place
if(addToCartButton){
  addToCartButton.addEventListener('click', addtoarray);
}
      
 
