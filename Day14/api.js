// ---------------- display country name by fetch in dropdown ----------------------

// let demo = async() => {
//     let data = await window.fetch("https://raw.githubusercontent.com/samayo/country-json/refs/heads/master/src/country-by-name.json");
//     console.log(data);
//     let res =  await data.json()
//     console.log(res);
    
//     res.map((x) => {
//         console.log(x);
//         console.log(x.country);

//         let select = document.getElementById("select");
//         console.log(select);

//         select.innerHTML += `<option value=${x.country}>${x.country}</option>`

//         let demo1 = document.getElementById("demo1");
//         console.log(demo1);
//         demo1.innerHTML += `<option value=${x.country}>${x.country}</option>`

//     })
// }
// demo();

// ---------------- display searched images from "pixabay" by fetch ----------------------


let btn = document.getElementById("btn");
console.log(btn);

btn.onclick = () => {
    let search = document.getElementById("search").value; // Get the value from the search box
    console.log(search);
    let page = 30;
    window.fetch(`https://pixabay.com/api/?key=48527686-955e3778bfcac1f923da851e3&q=${search}&image_type=photo&per_page=${page}`)
    .then((data) => data.json())
    .then((res) => {
        console.log(res);
        console.log(res.hits);

        let div = document.getElementById("div");
        console.log(div);
        
        div.innerHTML = "";

        res.hits.map((x) => {
            console.log(x);
            let img = document.createElement("img");
            img.src = x.previewURL;
            div.appendChild(img);
        });
    })
    .catch((error) => {
        console.error("Error fetching images:", error);
    });
};


