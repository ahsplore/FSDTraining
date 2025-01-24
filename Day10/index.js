// 🔹 document.getElementsByTagName
let a = document.getElementsByTagName("p"); // give output as HTMLCollections -  in the form of array with index value
console.log(a);
console.log(a[0]);
console.log(a[1]);
a[1].style.color = "green";
a[1].style.fontFamily = "Brush Script MT"
a[1].style.fontWeight = "bold"
a[1].style.fontSize = "30px";

// 🔹 document.getElementsByName
let b = document.getElementsByName("demo2"); // give output as NodeList
console.log(b);

// ◽ HTMLCollection - store only tags
// ◽ NodeList - stores plaintext and tag also

console.log(b[1]);
b[1].style.backgroundColor = "red";
b[0].style.color = "yellow";
b[0].style.backgroundColor = "black";

console.log(document.body.childNodes);  // gives as NodeList
// text -> is the PlainText

// 🔹 document.querySelectorAll
// --> we have to pass value with css symbol
// --> will return reference of first-element

let c = document.querySelector("#demo");
console.log(c);

let c1 = document.querySelector(".demo1");
console.log(c1)

// 🔹 document.querySelectorAll
// --> we have tp pass value with css symbol
// --> will return reference in NodeList

let e = document.querySelectorAll("#demo");
console.log(e);

let e1 = document.querySelectorAll(".demo1");
console.log(e1);


// --------------- Events in DOM -----------------
// it is an action performed by end-user on a web page

// Types
//    1️⃣ key-board event
//         - key-up event
//         - key-down event
//         - key-press event
//    2️⃣ mouse event
//         - onmouseover event
//         - onmouseleave event
//         - dbclick event
//    3️⃣ key-board event
//         - input event
//         - blur event
//         - focus event
