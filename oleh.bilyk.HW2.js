// Task 1
/*
let x = 1;
let y = 2;
let res1 = String(x) + String(y);

console.log(res1); // "12"
console.log( typeof res1); // "string"

x = true
y = 2
let res2 = x + String(y);

console.log(res2); // "true2"
console.log( typeof res2); // "string"

x = 1;
let res3 = Boolean(x);

console.log(res3); // true
console.log( typeof res3); // " boolean "

x = 'Oleh';
let res4 = Number(x);

console.log(res4); // NaN
console.log( typeof res4); // "number"
*/

// Task 2
/*
let m = prompt('Type the velue');
    if (m > 0) {
    console.log(m * 7);
} 
    else {
    console.log("The value should bigger than 0");        
}
*/

// Task 3
/*
let inf = [];

inf[0] = 2024;
inf[1] = "QC";
inf[2] = true;
inf[3] = null;

console.log(inf.length);

let new_item = prompt("Enter the value:")
inf.push(new_item); 
console.log(inf[4]);

inf.shift();
console.log(inf);
*/
// Task 4
/*
let cities = [" Rome ", " Lviv ", " Warsaw "]; 
console.log(cities.join("*"))
*/

// Task 5
/*
let isAdult = +prompt("How old are you?");
    if(isAdult >= 18) {
    console.log("You have reached the age of majority");
}
    else {
    console.log("You are still too young");
    }
*/

// Task 6
/*
let side1 = +prompt("Enter first side");
let side2 = +prompt("Enter second side");
let side3 = +prompt("Enter third side");
    
if (side1 <= 0 || side2 <= 0 || side3 <= 0 || isNaN(side1) || isNaN(side2) || isNaN(side3)) {
    console.log("Incorrect data");
}
    else {
    let s = (side1 + side2 + side3)/2;
    let area = Math.sqrt(s * ((s-side1)*(s-side2)*(s-side3)));
    console.log((area.toFixed(3)))    
}

let triangle_rectangular = 
    (side1 ** 2 + side2 ** 2 == side3 ** 2 ||
    side2 ** 2 + side3 ** 2 == side1 ** 2 ||
    side1 ** 2 + side3 ** 2 == side2 ** 2) 
    ? console.log("The triangle is rectangular") 
    : console.log("The triangle is not rectangular")
*/

// Task 7
/*
let current_date = new Date().getHours();

if (current_date >= 23 && current_date < 5 ) {
    console.log("Good night");
}
else if (current_date >= 5 && current_date < 11 ) {
    console.log("Good morning");
}
else if (current_date >= 11 && current_date < 17 ) {
    console.log("Good day");
}
else if (current_date >= 17 && current_date < 23 ) {
    console.log("Good evening");
}
*/
/*
let current_date = new Date().getHours();

switch(true) {
    case (current_date >= 23 && current_date < 5):
    console.log("Good night");
    break;

    case (current_date >=5 && current_date < 11):
    console.log("Good morning");
    break;

    case (current_date >= 11 && current_date < 17):
    console.log("Good day");
    break;

    case (current_date >= 17 && current_date < 23):
    console.log("Good evening");
    break;
    }
*/

