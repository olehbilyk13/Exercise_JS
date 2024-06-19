//Task 1
/*
const arr = [2,3,4,5];
let product = 1;
    for(let i = 0; i < arr.length; i++){
    product *= arr[i];
 }
    console.log(product);

product = 1;
let i = 0;
    while (i < arr.length){
    product *=arr[i];
    i++;
 }
     console.log(product);
*/

// Task 2
/*
for (let i = 0; i <= 15; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);
    } else {
        console.log(`${i} is odd`);
    }
}
*/

// Task 3 
/*
function randArray(k) {
    let random_integers = [];
    for(let i = 0; i < k; i++){
        random_integers.push(Math.floor(Math.random() * 500) + 1);
}
        return random_integers;
}

    console.log(randArray(5));
*/ 
    
// Task 4
/*
function raiseToDegree(a, b) {
    return Math.pow(a, b);
}


let numberA = parseInt(prompt("Enter the value for 'a':"));
let numberB = parseInt(prompt("Enter the value for 'b':"));

if (!Number.isInteger(numberA) || !Number.isInteger(numberB)) {
    console.log("Please enter integers only.");
} else {
    let result = raiseToDegree(numberA, numberB);
    console.log(`Result: ${result}`);
}
*/

// Task 5
/*
function findMin() {.
    let min = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (arguments[i] < min) {
            min = arguments[i];
        }
    }
    return min;
}

console.log(findMin(12, 14, 4, -4, 0.2));
*/

// Task 6
/*
function findUnique(arr) {
    let uniqueElements = {};
    for(let i = 0; i < arr.length; i++) {
    if (uniqueElements[arr[i]])    
{
    return false;
} 
    else {
    uniqueElements[arr[i]] = true;
}    
}
    return true;
}

console.log(findUnique([1, 2, 3, 5, 3]));
console.log(findUnique([1, 2, 3, 5, 11]));
*/
// Task 7
/*
function lastElement(array, i=1) {
    if (i >= array.length) {
        return array;
    } else {
        return array.slice(-i);
    }
}


function raiseToDegree(a, b) {
    return Math.pow(a, b);
}

// Taking input from the user via prompt
let numberA = parseInt(prompt("Enter the value for 'a':"));
let numberB = parseInt(prompt("Enter the value for 'b':"));

if (!Number.isInteger(numberA) || !Number.isInteger(numberB)) {
    console.log("Please enter integers only.");
} else {
    let result = raiseToDegree(numberA, numberB);
    console.log(`Result: ${result}`);
}

console.log(lastElement([3, 4, 10, -5]));
console.log(lastElement([3, 4, 10, -5], 2));
console.log(lastElement([3, 4, 10, -5], 8));
*/

// Task 8 
/*
const cap_letter = function (inf) {

    let str = inf.split(" ");
    for (let i = 0; i < str.length; i++){
        str[i] = str[i][0].toUpperCase() + str[i].substring(1);   
    }
return str.join(" ");
}
console.log(cap_letter("i love java script"));
*/