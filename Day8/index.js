
// isNaN -> checks whether the given input is characters
//    isNaN("10a") -> true
//    isNaN(10) -> false

function main(m, n) {
    new Promise((resolve, reject) => {
        window.setTimeout( () => {
            if (isNaN(m) || isNaN(n)) {
                return reject();
            }
            for (let i = m; i <= n; i++) {
                console.log(i);
            }
            return resolve();
        }, 5000)
    })
    .then(() => console.log("Promise resolved"))
//  .then(() => console.log(20*12)) // promise chaining --> this is not preferred - due to complexity
    .catch(() => console.log("Error Occurred"))
}
main(1, 10);

function demo() {
    console.log("Number's printed");
}
demo();

// Promise Chaining
// using multiple then methods is called promise chaining

// async and await  -->  are keywords
// is used to avoid promise chaining

// fetching API -> AJAX, fetch, etc
// google maps -> developed using AJAX
// AJAX --> fetch data without page reloading


// DOM - Document Object Model

/*
                                                      BOM 
                                            (Browser Object Model)
                                                       ⬇
                                                    window 
                                         (it is root element of BOM)
                                                (this has APIs)
   ________________________________________________________________________________________________________                          
   ⬇                ⬇                 ⬇               ⬇                   ⬇            ⬇                   ⬇
screen           history            fetch        navigator           navigation      storage              DOM
                                (fetching api) (entire hardware     (navigation)  (browser storage,
                                               things - online etc)               session / local 
                                                                                     storage) 

*/

/*                DOM
                   ⬇
                Document --> root element
                   ⬇
                  html
          __________⬇____________
          ⬇                      ⬇
        head                    body
    ___________                   ⬇
    ⬇          ⬇               all-tags
  meta        title
*/

// DOM (Document object Model)
// -> it is an object ]
// -> is an api provided by window
// -> having root-element document
// -> lifespan: until page-reloads
// -> used to create, update/modify, delete an element
// -> we can provide style using DOM