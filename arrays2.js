

let fruits = ["apple", "grapes", "plum", "pear"];

// I want to see what my first item is

fruits.forEach(
    (eachFruit) => {
    // finding the longest word
    }
);

// .map will loop thorugh the array AND return a new array
//  ["APPLE", "GRAPES", "PLUM", "PEAR"]
let myNewArray = fruits.map((fruit) => {
    return fruit.toUpperCase(); // APPLE
})

console.log(fruits, myNewArray);


let grades = [80, 50, 90, 45, 87];

// the class got extra credit, so everyone get some extra points
//              [85, 55, 95, 50, 92]
let newGrades = grades.map((points) => {
    return points+5
});

console.log(grades, ne);





// for (let i=0; i<fruits.length; i++) {
//     let theFruitAtThisIndex = fruits[i]
//     if (theFruitAtThisIndex == "grapes") {
//         console.log("you grapes in your list");
//     }
// }


