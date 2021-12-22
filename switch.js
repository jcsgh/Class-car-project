// quesiton 1

let num = Math.floor(Math.random() * 5)

console.log(num)

switch (num) {
    case 0:
        console.log("The first recorded zero appeared in Mesopotamia around 3 B.C") 
        break;
    case 1: 
        console.log("The ancient Greeks did not consider One to be a number at all. A number, said Euclid, is an “aggregate of units”, so numbers began at Two. ")
        break;
    case 2:
        console.log("Turtles can breathe through their butts.")
        break;
    case 3:
        console.log("We live on the 3rd planet from the sun.") 
        break;
    default:
        console.log("larger than 4")
}


// question 2

function randomDate(start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const d = randomDate(new Date(2012, 0, 1), new Date());
let date = d.getMonth()
console.log(date)

switch (date) {
  case 1:
    console.log("Jan birthday")
    break;
  case 2:
    console.log("Feb birthday")
    break;
  case 3:
    console.log("March birthday")
    break;
  case 4:
    console.log("April birthday")
    break;
  case 5:
    console.log("May birthday")
    break;
  case 6:
    console.log("June birthday")
    break;
  case 7:
    console.log("July birthday")
    break;
  case 8:
    console.log("Aug birthday")
    break;
  case 9:
    console.log("September birthday")
    break;
  case 10:
    console.log("October birthday")
    break;
  case 11:
    console.log("It is November's birthday")
    break;
  case 12:
    console.log("December birthday")
    break;
    
}

// question 3

let person = {
name: 'tony',
age: 20,
driver: null
};

let canDrive = person.age >= 16 ? 'Yes' : 'No'

console.log(canDrive)

// question 4

let age = 3;

let kindergardenelligible = age > 5 ? 'Old enough' : 'Too young'

console.log(kindergardenelligible)


