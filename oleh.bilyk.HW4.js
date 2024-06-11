
//Task1
/*
function calcRectangleArea(a, b) {
    
let side1 = parseFloat(a);
let side2 = parseFloat(b);

if (side1 <= 0 || side2 <= 0 || isNaN(side1) || isNaN(side2) || side1 ==="" || side2==="")
{
    throw new Error("Incorrect data");
}
else {
    return a * b;
}
}
try {
    let width = prompt("Enter the first side of the rectangle:");
    let height = prompt("Enter the second side of the rectangle:");
    let area = calcRectangleArea(width, height);
    console.log('Result: ' + area);
}   catch (error) {
    console.error('An error occurred:', error.message);
}
*/

//Task2
/*
function checkAge () {
    try { 
    let age = prompt("What is your age?");
       if (age==="") {
        throw new TypeError("The field is empty ! Please enter your age");
    }
    if (isNaN(age)){
        throw TypeError ("Please, enter a numeric value");
    }
    if (age < 14){
        throw RangeError ("You must be older than 14");
    }
    else {
    console.log(`You are allowed to watch the movie`);
    }
} catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}
checkAge ()
*/

// Task 3
/*
class MonthExeption extends Error{
    constructor(message){
        super(message);
        this.name = "MonthExeption";
    }
}

function showMonthName(month){
    const monthArray = ["January", "February", "March", "April",  "May", "June", "July", "August",  "September", "October",  "November", "December"];

    if(month <1 ||  month > 12|| isNaN(month) || month===""){
        throw new MonthExeption("Incorrect month number");
    }
    return monthArray[month - 1];
}
try{
    month=+prompt("Please enter a number of the month:")
    console.log(showMonthName(month));
}catch(error){
    console.log(error.name);
    console.log(error.message);

}
showMonthName(month);
*/

// Task 4
/*
function showUser(id) {
    if (id<0 || isNaN(id) || id==="") {
        throw new Error (`ID must not be negative: ${id}`); 
    }
    return {id: id};
}
function showUsers (ids) {
    const Array=[];
    for (let i=0; i<ids.length; i++) {
        try {
            const users=showUser(ids[i])
            Array.push(users);
        } catch (error) {
            console.log(error.message);
        }
    }
    return Array;
   
}
    console.log (showUsers([7, -12, 44, 22]));
*/

