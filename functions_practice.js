

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


console.log(groupOneIsGood);

if (groupOneIsGood) {

}

