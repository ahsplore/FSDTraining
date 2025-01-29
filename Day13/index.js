// 𝐉𝐒𝐎𝐍
// ------------------- Application Programming Interface -------------------
// SOAP - outdated
// REST (Representational State - currently & mostly used
// JSON - mostly used in companies (supports 21+ programming languages)

//---------------------------------------------------------------------------------------------------

// 𝐉𝐒𝐎𝐍 (𝐉𝐚𝐯𝐚𝐒𝐜𝐫𝐢𝐩𝐭 𝐎𝐛𝐣𝐞𝐜𝐭 𝐍𝐨𝐭𝐚𝐭𝐢𝐨𝐧) -->  it is not library / framework / programming lannguage
// It is a plain-text file used to store data in the form of key and value pair.
// where all the keys should be enclosed in a double quotes " ".

// Has two methods
//    1️⃣stringify() --> convert object to JSON format
//    2️⃣parse() --> convert JSON to object format

/*  𝐇𝐎𝐖 𝐓𝐎 𝐂𝐑𝐄𝐀𝐓𝐄 𝐀 𝐉𝐒𝐎𝐍

step 1: create a .json file
step 2: create a data in the form of key and value pair and key enclosed in " ". 
        As a value -> we should not use undefined and function data-type.

        for multiple objects : [{ }, { }, { }, . . .] -> array of object
*/

let obj = {
    name: "kumar",
    id: 1,
    designation: "developer",
}
console.log(obj);

let obj1 = JSON.stringify(obj);
console.log(obj1);
let obj2 = JSON.parse(obj1);
console.log(obj2);

// 𝐅𝐞𝐭𝐜𝐡𝐢𝐧𝐠 𝐭𝐡𝐞 𝐉𝐒𝐎𝐍: There are 3 ways
//     1️⃣ fetch() method
//     2️⃣ AJAX
//     3️⃣ Axios

// ▪️ fetch returns Promise

window.fetch("data.json")
.then((data) => data.json())
.then((res) => {
    // console.log(res);
    // console.log(res[0]);
    // console.log(res[2]);
    // console.log(res[1].name);
    res.map((x) => {
            console.log(x);
            console.log(x.name);
            console.log(x.id);
            document.body.innerHTML += `<h1>${x.id} - ${x.name} - ${x.designation}</h1>`;
    })  // all objects iterates on same time
})

/*  .then((data) => console.log(data)); --> the 𝙍𝙚𝙨𝙥𝙤𝙣𝙨𝙚 is called as 𝙖𝙧𝙧𝙖𝙮 𝙗𝙪𝙛𝙛𝙚𝙧 */

//  array buffer : understood by the machine
/*  𝗛𝗧𝗧𝗣 𝗿𝗲𝘀𝗽𝗼𝗻𝘀𝗲 𝘀𝘁𝗮𝘁𝘂𝘀 𝗰𝗼𝗱𝗲𝘀
- Informational responses (100 – 199)
- Successful responses (200 – 299)
- Redirection messages (300 – 399)
- Client error responses (400 – 499)
- Server error responses (500 – 599)
*/

window.fetch("https://fakestoreapi.com/products")
.then((data) => data.json())
.then((res) => {
    res.map((x) => {
            document.body.innerHTML += `<h1>${x.title}</h1>`;
            document.body.innerHTML += `<img src=${x.image}></img>`;
    })  // all objects iterates on same time
})