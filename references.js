

// let name1 = "Bob";

// let name2 = name1;

// name2 = "Carl";

// console.log(name1, name2);






// let arr1 = ["JC", "Rene"]


// const addToArray = (arrayParam) => {
//     arrayParam.push("Kelly")
// }

// addToArray(pointer);

// console.log(arr1);








// let myName = "Chase"

// const returnSentence = (nameParam) => {
//     nameParam = nameParam +" is Awesome!"
//     return nameParam
// }

// let sentence = returnSentence(myName)


// console.log(sentence)
// console.log(myName);






// looping through an object

const myCar = {
    year: 2009,
    make: "hyundai",
    model: undefined,
    broken: true
}

// does every property have  a value

let arrayOfKeys = Object.keys(myCar) // array of all the keys

console.log(arrayOfKeys);
arrayOfKeys.forEach((key) => {
    console.log(myCar[key]); // now I can check if tese values are undefined
})
