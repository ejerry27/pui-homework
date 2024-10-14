

document.addEventListener('DOMContentLoaded',function(){

    const queryString = window.location.search;
    const params = new URLSearchParams(queryString);
    const rollType = params.get('roll');

    if (rollType in rolls){
      console.log(rollType);
      const headerElement = document.querySelector('#headerdet');
      headerElement.textContent = rollType+" Cinnamon Roll";
      const basePrice=document.querySelector('#cost1');
      basePrice.textContent= "$"+rolls[rollType]["basePrice"];
      const rollImage = document.querySelector('#imgs');
      rollImage.src ="../assets/products/"+ rolls[rollType]["imageFile"];

    }

    // being able to access the respective queries in HTML file
    // for loops for dynamically populating pack and glazing drop downs
    const glazeselect=document.querySelector("#glazingOptions");
    const packselect=document.querySelector("#pack");
    const totalpriceSpan=document.querySelector("#cost1");
  
    for(let i=0;i<packoptions.length;i++){
      const pack=packoptions[i];
      const options=document.createElement('option');
      options.value=pack.price;
      console.log(options);
      options.textContent=pack.name;
      console.log(packselect);
      packselect.add(options);
       
    }
    for (let i =0;i<Alloptions.length;i++){
      const glazingpick=Alloptions[i];
      const options=document.createElement('option');
      options.value=glazingpick.price;
      options.textContent=glazingpick.name;
      glazeselect.add(options);
    }

    function calculateTotalPrice(){
      const glazingprice=parseFloat(glazeselect.value);
      const packPrice=parseInt(packselect.value);
      const priceChange=(rolls[rollType]["basePrice"]+glazingprice)*packPrice;
      totalpriceSpan.textContent="$ "+priceChange.toFixed(2);
    }
    window.glazingChange=function(element){
        const priceChange=parseFloat(element.value);
        calculateTotalPrice();
    }
    // function to add to array
    function addtoarray(){
    // getting all the required elements of the roll in order to add to the arry
        let glazeselectdropdown=document.getElementById("glazingOptions");
        const rollGlazing=glazeselectdropdown.options[glazeselectdropdown.selectedIndex].text;
        let idstuff=document.getElementById("pack");
        const packSize=idstuff.options[idstuff.selectedIndex].text;
        const packPrice=rolls[rollType]["basePrice"];
        // creating an instance of the class Roll
        const newrollforarray=new Roll(rollType,rollGlazing,packSize,packPrice);
        rollSet.add(newrollforarray);
        console.log(rollSet);
        saveToLocalStorage();
        
        
    }
    // event of change and what function is called after 
    glazeselect.addEventListener('change',glazingChange);
    packselect.addEventListener('change',calculateTotalPrice);
    const addToCartButton = document.getElementById('addtocart');
    // if the button is present in the page then the addtoarray function takes place
    if(addToCartButton){
        addToCartButton.addEventListener('click', addtoarray);
    }
    
});