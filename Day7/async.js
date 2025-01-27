// SYNCHRONOUS FUNCTION

function main1(m, n) {
    for (let i = m; i <= n; i++) {
        console.log(i);
    }
}
main1(1, 10);

function demo1() {
    console.log("Number's printed");
}
demo1();

// ASYNCHRONOUS FUNCTION

// making a way for other function to execute first

// ◽ Two Methods     --->     present under "window" object
//     ◽ setTimeout( call back function, delay time )  --> output once
//     ◽ setInterval( call back function, delay time )  --> for every delay it will print

window.setTimeout( () => {
    console.log("I am SetTimeout");
}, 5000);

window.setInterval( () => {
    console.log("I am SetInterval");
}, 2);

// Example

function main(m, n) {
    window.setTimeout( () => {
        for (let i = m; i <= n; i++) {
            console.log(i);
        }
    }, 5000);
}
// main(1, 10);
main(1, "232cd")

function demo() {
    console.log("Number's printed");
}
demo();

// ◽ there are few situation where asynchronous function doesn't work

// so in this it will take help of --- Promises --- comes into picture it takes over asynchronous function

// Promise

// ◽ it is an object
// ◽ it is used to look after asynchronous function

// ◽ It has 3 - phases
//     1️⃣ pending phase  -->  we don't know whether the "promise" is rejected/fulfilled
//     2️⃣ resolved / fulfill phase  -->  when asynchronous function is working properly
//     3️⃣ reject phase  -->  when asynchronous function is NOT working properly

// ◽ when "Promise" will return -> resolve -> then resolve will accept a method --> .then( call back function ) --> which accepts Call back function
// ◽ when "Promise" will return -> reject -> then reject will accept a method --> .catch( call back function ) --> which accepts Call back function

/*
🔅Syntax:

new Promise( (resolve, reject) => {
    -- asynchronous-function-code
} )
.then(cbf)   // if resolved
.catch(cbf)   // if rejected

 */

let online = window.navigator.onLine    // window --> has many APIs --> navigator (is one of them)
                                        // onLine --> is a method in "navigator" -> it will see whether device is connected to internet
new Promise( (resolve, reject) => {
    setTimeout( () => {
        if (online === true) {
            return resolve();
        }
        else {
            return reject();
        }
    }, 5000 )
} )
.then( () => console.log("online... 😁") )
.catch( () => console.log("offline... 🙁") )