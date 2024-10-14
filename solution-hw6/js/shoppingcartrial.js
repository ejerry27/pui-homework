
document.addEventListener('DOMContentLoaded',function(){

    for (let newroll of rollSet){
        console.log(newroll);
        createElement(newroll);
    }
    function createElement(newroll){//this was newrollbefore
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


    function updateTotalPrice(){
        let totalcost=0;
        rollSet.forEach(newroll=>{
            totalcost+=newroll.calculatePrice();
        });
        const totalprice=document.querySelector("#price");
        totalprice.innerText="$"+totalcost.toFixed(2);
    }

    function removeRoll(newroll){
        newroll.element.remove();
        rollSet.delete(newroll);

        updateTotalPrice();
        saveToLocalStorage();
    }

    // for (const rollelement of newroll){
    //     createElement(rollelement);
    // }
});
