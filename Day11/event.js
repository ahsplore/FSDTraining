function demo() {
    console.log("Button Clicked!");
}

let a = document.getElementById("demo1");
console.log(a);
a.onclick = function(e) {
    console.log(e); // tell which event the method comes under

    // let res =  Math.round(Math.random()*100);
    // console.log(res);

    let res = Math.round(Math.random() * 10000).toString(16);
    console.log(res); 
    document.body.style.backgroundColor = `#${res}`;
}

// let demo2 = document.getElementById("demo2");
// console.log(demo2);

// let color = window.prompt("enter any color name");
// console.log(color);

// demo2.innerHTML = color;

// demo2.onmouseover = () => {
//     document.body.style.backgroundColor = `${color}`;
//     document.body.style.transition = "ease all 10s";
// }

let demo4 = document.getElementById("demo4")
console.log(demo4);
  

 demo4.addEventListener("click" , () => {
    let demo3 = document.getElementById("demo3").value
    console.log(demo3);
    let speech = new SpeechSynthesisUtterance
    console.log(speech);
    speech.text = demo3
    speechSynthesis.speak(speech)
 })
