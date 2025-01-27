// ------------------ Manipulation and Modification of DOM ------------------
// used to update / modify the DOM

// ◽ Method for creation and modification of DOM
//   ➡ createElement()
// ◽ There are - Two-Steps:
//  --> Step 1: create element using createElement()

let a = document.createElement("h1")
console.log(a)  // Output:  <h1> <h1>   --> empty h1 tag create
a.textContent = "hello-world"
console.log(a); // Output:  <h1>hello-world</h1>

//  --> Step 2: appened element to the parent-element using: append() or appenedChild() method

document.body.appendChild(a); // adding the created h1 element to the body

a.style.backgroundColor = "olive"
a.style.color = "white";

// ----------------------------------------------------------------------

let div = document.createElement("div");
console.log(div);
document.body.appendChild(div);
div.style.border = "5px solid"

let ol = document.createElement("ol");
console.log(ol);
div.appendChild(ol);
ol.setAttribute("type", "a");

let li1 = document.createElement("li");
console.log(li1);
li1.textContent = "MongoDB";

let li2 = document.createElement("li");
console.log(li2);
li2.textContent = "ExpressJs";

let li3 = document.createElement("li");
console.log(li3);
li3.textContent = "ReactJs";

let li4 = document.createElement("li");
console.log(li4);
li4.textContent = "NodeJs";

ol.append(li1, li2, li3, li4);

// -----------------------------------------------------------------------------------------------------
let table = document.createElement("table");
console.log(table);
document.body.appendChild(table);
table.setAttribute("border", "2px solid");

let tr = document.createElement("tr");
table.appendChild(tr);

let th1 = document.createElement("th");
th1.textContent = "Roll Number";
tr.appendChild(th1);

let th2 = document.createElement("th");
th2.textContent = "Name";
tr.appendChild(th2);

let tr1 = document.createElement("tr");
table.append(tr1);

let td_1 = document.createElement("td");
td_1.textContent = "Anni";
tr1.appendChild(td_1);

let td_2 = document.createElement("td");
td_2.textContent = "0021";
tr1.appendChild(td_2);