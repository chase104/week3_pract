


let myFavorites = ["Cinderella Man", "Barbie", "Puss In Boots"];
myFavorites.push("The Matrix")
// ["Cinderella Man", "Barbie", "Puss In Boots", "The Matrix"]
myFavorites.unshift("Limitless")

// ["Limitless", "Cinderella Man", "Barbie", "Puss In Boots", "The Matrix"]
myFavorites.shift()

myFavorites.pop()


let favoriteMoviesOfEveryone = []

favoriteMoviesOfEveryone.push("Wolf of Wallstreet", "Annabel", "Hereditary")
favoriteMoviesOfEveryone.push("Inception" , "Limitless " , "Daddy's Home")
favoriteMoviesOfEveryone.push("Don't be a Menace", "Birth of a Nation", "Django")
favoriteMoviesOfEveryone.push("titanic", "avatar", "ready playerone")


console.log(favoriteMoviesOfEveryone);

// Titanic is too sad. I want to make sure it is not in my array

for (let i=0; i<favoriteMoviesOfEveryone.length; i++) {
    let thisMovie = favoriteMoviesOfEveryone[i];
    console.log(thisMovie);
    // check if it is titanic
    if (thisMovie == "titanic") {
        console.log("this is titanic - we need to remove it!")
        // remove it!
    }
}