// (generic - multiple task)

// -------- function programming ---------
// ● Higher order function  
// ● Call back function

function main(task) {
    console.log(task);
    console.log(task(10, 10));
}

main(function(a, b) {
    return a + b;
});

main(function(a, b) {
    return a - b;
});

main(function(a, b) {
    return a * b;
});

// -------- arrow fuction ---------
// introduced in ES-6 version(ECMA-script) 2015
// ECMA - European Computr Manufacture Association - created by "Netscape"
// used to reduce the number of lines

// two types of return
// 1. Implicit return arrow fuction
// --> no need to using return keyword

() => console.log("hello");  // it is like anonymous fuction and can be used as a value

let a = () => console.log("hello");
console.log(a);
console.log(a());

// => fat arrow

// 2. Explicit return arrow fuction   (MOSTLY USED)
// --> return keyword is mandatory

() => { return "Hello"; }  // here -->  { ... . } block mandatory

let b = () => { return "Hello"; };
console.log(b);
console.log(b());

let fun = (task) => {
    console.log(task);
    console.log(task());
}
fun( () => {
    return "CallBack Function 1"
} )
fun( () => {
    return "CallBack Function 2"
} )
fun( () => {
    return "CallBack Function 3"
} )

// ------- Task ------
// differnt user input for each funtion

function main(task) {
    console.log(task(Number(prompt()), Number(prompt())));
}

main(function(a, b)
{
    console.log("Addition:");
    console.log("a:", a, "b:",b);
    return a + b;
});

main(function(a, b) {
    console.log("Subtract:");
    console.log("a:", a, "b:",b);
    return a - b;
});

main(function(a, b) {
    console.log("Multiply:");
    console.log("a:", a, "b:",b);
    return a * b;
});

// "this" - keyword - used to access global scope inside local scope
