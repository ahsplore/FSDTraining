// OBJECTS in JavaScript

// ◽ used to store data in the form of --> key and value pair
// ◽ key --> identifiers & values --> data type (any data type can be passed)

// ◽ Declaration
let obj = {
    name : "abc",
    id : 105,
    boolean : true,
    arr : [10,50,100],
    null : null,
    undefined : undefined,
    demo : function(){
                return "hello";
            }
}

console.log(obj);
console.log("name:", obj.name);
console.log(`function demo:  ${obj.demo()}`);

// ◽ using contructor function creating object      *** "this" - keyword - will target the current object

function obj1(name, id) {
    this.name = name;        // .name & .id  --> are the identifier ( we can even take as --> this.abc = name; )
    this.id = id
}

// ◽ arrow function - doesnt have any prototype - so we cannot create a "constructor function" using arrow funtion

let p1 = new obj1("ALPHA", 2);
console.log(p1);
console.log(p1.name);
console.log(p1.id);