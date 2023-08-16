let myCohort = {
    learners: 17,
    totalPeople: 19,
    instructor: "chase"
}

let propertyIwant;

let activity = "party"; 

if (activity === "assignment") {
    propertyIwant = "learners"
} else {
    propertyIwant = "totalPeople"
}

console.log("this applies to :", myCohort[propertyIwant], " people")