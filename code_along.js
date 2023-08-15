

let shoppingList = ['Apples', 'Milk', 'Bread', 'Eggs'];
const readList = (array) => {

    array.forEach((item) => {
        console.log(item);
    })


};
const removeFromList = (array, itemToRemove) => {
    array.forEach((thing, index)=>{
        if (thing === itemToRemove) {
            // this is the thing we want to take out
            array.splice(index, 1)
        }
    })
};
const addToList = (array, itemToAdd) => {
    // check if this thing is already in the array
    //  check if the item has the same data type as whatever is in the array.
    let shouldAdd = true;
    array.forEach((thing) => {
        if (thing === itemToAdd || typeof itemToAdd !== typeof thing ) {
            shouldAdd = false;
        }
    })
    if (shouldAdd) {
        array.push(itemToAdd)
    }
}

addToList(shoppingList, 5)
console.log(shoppingList);





// will this work?

// NO   FALSY
if ('') { 
}
if (false) { 
}
if (null) { 
}
if (undefined) {
}
if (0) {
}

// YES TRUTHY
if ("hello"){
}
if (1){
}
if (56){
}
if (true){
}
if ({}) {

}
if ([]){

}



let highScores = [1024, 876, 1500, 720, 950];


highScores.push(2000)

// remove all scores that are this number!
const removeScores = (scoreToRemove) => {

    highScores.forEach((score, index) => {
        if (score === scoreToRemove) {
            highScores.splice(index, 1);
        }
    })

}

let indexOfThing = highScores.indexOf(720)
highScores.splice(indexOfThing, 1)

removeScores(1500)
console.log(highScores);
