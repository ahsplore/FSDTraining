console.log(window);
console.log(window.document); // or elese console.log(document)

// DOM is a object
console.log(typeof document);

console.log(document.URL);
console.log(document.doctype);
console.log(document.head);
console.log(document.title);
document.title = "HelloWorld";
console.log(document.title);
console.log(document.body);

let links = document.links; // all the anchor tags written in html will be targetted
// console.log(links[0]);
// console.log(links[1]);
// console.log(links[2]);
for (let i = 0; i < links.length; i++) {
    console.log(links[i]);
    links[i].className = "demo";
    links[i].href = "https://youtube.com/"
    links[i].target = "_blank";  // opens the link in new tab
}

console.log(document.forms);

// Methods in DOM (there are 6) OR in-direct access
    //  1. document.getElementById("value")
    //  2. document.getElementsByName("value")
    //  3. document.getElementsByClassName("value")
    //  4. document.getElementsByTagName("value")
    //  5. document.querySelector("value")
    //  6. document.querySelectorAll("value")

let a = document.getElementById("demo");
console.log(a);
console.log(a.textContent);
a.textContent = "BATCH 6";
console.log(a.textContent);
a.style.color = "#034C65";
a.style.backgroundColor = "#CBD5C0";
a.style.textAlign = "center";

let b = document.getElementsByClassName("demo1");
console.log(b);
console.log(b[0]);
console.log(b[1]);
console.log(b[0].textContent);
b[0].style.color = "#353C7D";
