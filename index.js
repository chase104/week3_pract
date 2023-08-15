




// check if email length is good & if email has @ symbol

const returnEmailIsValid = (email) => {
    if (email.length <10 || email.length > 50 || !email.includes('@')) {
        return false;
    } else {
        return true;
    }
}

const emailIsValid = returnEmailIsValid("hello@mysite.com");

if (emailIsValid) {
    console.log("welcome to the site!");
} else {
    console.log("please use a good email");
}


let peopleInRestaurant = 0;
const maxPeople = 50;

const addPeopleToRestaurant = (numberOfPeople) => {
    if (peopleInRestaurant+numberOfPeople > maxPeople) {
        // there would be too many people
        console.log("Cannot add because there is now space");
    } else {
        peopleInRestaurant += numberOfPeople;
        console.log("the number of people is now: ", peopleInRestaurant);
    }
}

addPeopleToRestaurant(5);
addPeopleToRestaurant(10);
addPeopleToRestaurant(20);





// non-returning function

// make a function that will add some words to a story.


let myStory = "Once Upon a time, ";


const addToStory = (string) => {
    myStory += string;
}


addToStory(" there was a dragon.")
addToStory(" The dragon lived on a mountain.");
addToStory(" But it was very windy that year");

console.log(myStory)


const makeNameCapitalNoSpaces = (name) => {
    let lowerCaseName = name.toLowerCase()
    let noSpaceString = lowerCaseName.replace(/\s/g, '')
    return noSpaceString;
}

const finalName = makeNameCapitalNoSpaces("Jerry Smith");

console.log(finalName);

const doSomethingImportant = (capitalNamesONLY) => {

}




doSomethingImportant(finalName)







let students = [];
