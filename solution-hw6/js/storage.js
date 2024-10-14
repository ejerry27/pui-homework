let rollSet=new Set();

if (localStorage.getItem('storedRolls') != null) {
    retrieveRolls();
}


function saveToLocalStorage(){
    const rollarray=Array.from(rollSet);
    console.log(rollarray);
    const rollarraystring=JSON.stringify(rollarray);
    console.log(rollarraystring);
    localStorage.setItem('storedRolls',rollarraystring);

}
function retrieveRolls(){
    const rollarraystring=localStorage.getItem('storedRolls');
    const rollarray=JSON.parse(rollarraystring);
    console.log(rollarray);
    for (const rollData of rollarray){
        console.log(rollData);
        const newrollforset=new Roll(rollData.type, rollData.glazing, rollData.size,rollData.basePrice);
        rollSet.add(newrollforset);
        console.log(rollSet);
        //createElement(newroll);
    }
}