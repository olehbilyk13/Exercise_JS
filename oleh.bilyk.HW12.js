// Task 1
/*
function upperCase(str) {
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        console.log("String starts with uppercase character");
    } else {
        console.log("String does not start with uppercase character");
    }
}

upperCase('regexp');
upperCase('RegExp');
*/

// Task 2
/*
function checkEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email.trim());
}
console.log(checkEmail("Qmail2@gmail.com"));
*/

// Task 3
/*
const text = "cdbBdbsbz";
const regex = /d[bB]+d?/g;
const result = text.match(regex);
console.log(result); // Output: ["dbBd", "bB", "d"]4
*/

// Task 4
/*
let text = "Java Script";
const regex = /(\w+)\s+(\w+)/;
const result = text.replace(regex, '$2, $1');
console.log(result); // Output: "Script, Java"
*/

// Task 5
/*
function validateCardNumber(cardNumber) {
    const cardPattern = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (cardPattern.test(cardNumber)) {
        console.log("Card number is valid!");
    } else {
        console.log("Card number is not valid!");
    }
}

validateCardNumber("9999-9999-9999-9999");
validateCardNumber("AAA9999-9999-9999-9999");
*/

// Task 6
/*
function checkEmail(email) {
    const pattern = /^[a-zA-Z0-9]+([._-]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+([.-]?[a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;

    if (pattern.test(email)) {
        if (!['_', '-'].includes(email[0]) && email.indexOf('--') === -1) {
            console.log("Email is correct!");
        } else {
            console.log("Email is not correct!");
        }
    } else {
        console.log("Email is not correct!");
    }
}

checkEmail('my_mail@gmail.com');
checkEmail('#my_mail@gmail.com');
checkEmail('my_ma--il@gmail.com');
*/