


// being able to access the respective queries in HTML file
  const glazeselect=document.querySelector("#glazingOptions");
  const packselect=document.querySelector("#pack");
  const totalpriceSpan=document.querySelector("#totalprice");
  const basePrice=2.49;
  //Alloptions is the array for all the gamzing available
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
  //function to calculate the price by taking the values of pack and glazing
  function calculateTotalPrice(){
    const glazingprice=parseFloat(glazeselect.value);
    const packPrice=parseInt(packselect.value);
    const priceChange=(basePrice+glazingprice)*packPrice;
    //assigning this back to the html query and rounding up to 2 decimal points
    totalpriceSpan.textContent=priceChange.toFixed(2);
  }
  window.glazingChange=function(element){
    const priceChange=parseFloat(element.value);
    calculateTotalPrice();
  }
  // event of change and what function is called after 
  glazeselect.addEventListener('change',glazingChange);
  packselect.addEventListener('change',calculateTotalPrice)
