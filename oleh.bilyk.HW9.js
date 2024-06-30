//Task1
/*
function getPromise(message, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(message);
        }, delay);
    });
}

getPromise("test promise", 2000).then(function(data) {
    console.log(data);
});
*/

//Task2
/*
function calcArrProduct(arr) {
    return new Promise((resolve, reject) => {
        if (arr.every(element => typeof element === 'number')) {
            const product = arr.reduce((acc, curr) => acc * curr, 1);
            resolve(product);
        } else {
            reject("Error! Incorrect array!");
        }
    });
}

calcArrProduct([3, 4, 5]).then(result => console.log(result)); // 60
calcArrProduct([5, "user2", 7, 12]).then(result => console.log(result)); // "Error! Incorrect array!"
*/

//Task3
/*
const delay = (i, time) => new Promise(resolve => setTimeout(() => resolve(i), time));

function showNumbers() {
    let promiseChain = Promise.resolve();

    for (let i = 0; i <= 10; i++) {
        promiseChain = promiseChain.then((num) => {
            return delay(i, Math.floor(Math.random() * 3001)).then((number) => {
                console.log(number);
                return number;
            });
        });
    }
}

showNumbers();
*/

//Task4
/*
const delay = (i, time) => new Promise( resolve => setTimeout (() => resolve(i), time));

async function showNumbers ( ) {
	for (let i = 0; i <= 10; i++) {
        const randomDelay = Math.floor(Math.random() * 1000);
        await delay(i, randomDelay).then(result => {
          console.log(result);
        });
      }
}

showNumbers();
*/