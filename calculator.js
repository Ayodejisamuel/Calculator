/** @format */

/** @format */

 
setTimeout(function() {myFunction("Thanks For Checking In");}, 6000);

function myFunction(value) {
  document.getElementById("next").innerHTML = value;
}



// time interval functions
setInterval(function myFunction () {  
  
  let d = new Date();
  document.getElementById("demo").innerHTML = d.getHours() + " : " +
    d.getMinutes() + " : " + d.getSeconds()
}, 1000);

// time based greeting
// let time = new Date().getHours()
// let greeting

// if (time < 12) {
//   greeting = "Good morning"
// }
// else if (time < 18 ) {
//   greeting = "Good afternoon"
// }else  {
//   greeting = "Good Evening"
// }

// document.getElementById("greeting").innerHTML = greeting;

// calculator code
let display = document.getElementById("display");

let buttons = Array.from(document.getElementsByTagName("button"));

buttons.map((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.innerText) {
      case "AC":
        display.innerText = "  ";
        break;
      case "DEL":
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }

        break;
      case "%":
        display.innerText = display.innerText / 100;

        break;
      case "=":
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = " Error!";
        }

        break;

      default:
        display.innerText += e.target.innerText;
    }
  });
});


 
