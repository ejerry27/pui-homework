let rollSet=new Set();
// checking if the set is empty or not
if (localStorage.getItem('storedRolls') != null) {
    retrieveRolls();
}
// saving rolls to storage

function saveToLocalStorage(){
    const rollarray=Array.from(rollSet);
    console.log(rollarray);
    const rollarraystring=JSON.stringify(rollarray);
    console.log(rollarraystring);
    localStorage.setItem('storedRolls',rollarraystring);

}
//retrieving rolls from the storage
function retrieveRolls(){
    const rollarraystring=localStorage.getItem('storedRolls');
    const rollarray=JSON.parse(rollarraystring);
    console.log(rollarray);
    for (const rollData of rollarray){
        // console.log(rollData);
        const newrollforset=new Roll(rollData.type, rollData.glazing, rollData.size,rollData.basePrice);
        rollSet.add(newrollforset);
    }
}