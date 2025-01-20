// IIFE (Immediate Invoking FUnction Expression)

// ◽ it will be called immediatley as soon as fuction object is created.

// ◽ Syntax:  (expressionfunction)()

//      here expression is nothing but a function actually i.e expression is same that is function
//      here (.....) () <-- this extra bracket for calling the fucntion
 

// ◽ as we know this is an anonymous fuction --> we can make it as Expression using ( ... )
//      function() {                                ( function() {
//          console.log("hello");                          console.log("hello");
//      }                                              } )()  

//     annonymous funtion       ---expression--->     IIFE funtion -> as function became expression by enclosing in ( ... )() -> extra () for using / calling it

// ◽ using arrow funtion(which also an anonymous function as it doesnt have any name) -> used as expression -> IIFE function by (.expression/arrowfunction..) ()

//      (()=> {
//             console.log("Hello");
//      })


// ◽ more that 1 IIFE fuction end each one with ; (semi-colon) or else it will treat as one 

( function() {
    console.log("hello");
} )() ;

(()=> {
    console.log("bdfgudgjg");
}) ;   // as i didnt give the  () after })... this wont do its work that is its cont going to print "bdfgudgjg" in console

// Example:

( function() {
    console.log("HelloWorld");
} )();

((a, b)=> {
    console.log(a + b);
})(10, 15);