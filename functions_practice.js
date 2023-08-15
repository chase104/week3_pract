

const answerOne = "lorem ipsum"
const answerTwo = "This is answer two"
const answerThree = "lorem ipsum three"



// write a function that will count the length of 3 strings

const returnCount = (ans1, ans2, ans3) => {
    return ans1.length + ans2.length + ans3.length
}

let count1 = returnCount(answerOne, answerTwo, answerThree);

let count2 = returnCount("hello", "im", "Chase");



const isDivisible = (num) => {
    // check if divisible by 3 & 5

    if (num % 3 === 0 && num % 5 === 0) {
        return true
    } else {
        return false
    }
}

// let groupOneSize = 125;

let groupOneIsGood = isDivisible(15);


if (groupOneIsGood) {

}


const findLongestWord = (sentence) => {
    // what if sentence is not a string OR is an empty string
    if (sentence == '' || typeof sentence !== "string") {
        return
    }

    // return the longest word

    // 1. split string into individual words
    let arrayOfStrings = sentence.split(' ');
    // length is 5
    console.log(arrayOfStrings);
    // 2. loop through array and find the longest word
    let currentLongest = ''
    // i      0 1 2 3 4 X
    for (let i=0; i<arrayOfStrings.length; i++) {
        // is this word longer than the currentLongestWord
        if (arrayOfStrings[i].length > currentLongest.length) {
            currentLongest = arrayOfStrings[i]
        } 
    }
    return currentLongest;
}

// findLongestWord()