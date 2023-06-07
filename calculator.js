/** @format */

// /** @format */

alert("i am here " )
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
let time = new Date().getHours()
let greeting

if (time < 12) {
  greeting = "Good morning"
}
else if (time < 18 ) {
  greeting = "Good afternoon"
}else  {
  greeting = "Good Evening"
}

document.getElementById("greeting").innerHTML = greeting;

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


// time based greeting
// let time = new Date().getHours()
// let greeting

// if (time < 12) {
//   greeting = "Good morning"
// // }
// // else if (time >= 12 ) {
// //   greeting = "Good afternoon"
// // }else {
// //   greeting = "Good evening"
// // }



// // document.getElementById("greeting").innerHTML = greeting;
// /** @format */

// // /** @format */

// // function dec2bin(bin) {
// //   return parseInt(bin, 2).toString(10);
// // }
// // document.getElementById("menu").innerHTML = dec2bin(10001);
// // const fruits = new Map([
// //   ["apples", 500],
// //   ["Orange", 400],
// //   ["Pineapple", 300],
// // ]);

// // let text = "";
// // fruits.forEach(function (value, key) {
// //   text += key + " now  " + " " + value + " ";
// // });

// let display = document.getElementById("display");
// let buttons = Array.from(document.getElementsByTagName("button")); // Array.from converts the string to an array.

// // setInterval(function myFunction() {
// //   let d = new Date();

// //   document.getElementById("demo").innerHTML =
// //     d.getHours() + " :" + d.getMinutes() + " : " + d.getSeconds();
// // }, 1000);

// // time based greeting

// let time = new Date().getHours();
// let greeting;

// if (time < 18) {
//   greeting = "Good Morning";
// } else {
//   greeting = "Good evening";
// }
// document.getElementById("menu").innerHTML = greeting;

// let day = new Date().getDay(); // the day.get()hours will convert date to numbers.

// switch (day) {
//   case 0:
//     day = "Sunday, Go To Church!";
//     break;
//   case 1:
//     day = "Monday, ";
//     break;
//   case 2:
//     day = "Tuesday ";
//     break;
//   case 3:
//     day = "Wednessday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
//     break;
//   default:
//     day = "Wonderful";
// }

// document.getElementById("demo").innerHTML = "Today is " + day;

// buttons.map((button) => {
//   button.addEventListener("click", (e) => {
//     // switch is used to select 1 out of every code block to be executed
//     switch (e.target.innerText) {
//       case "AC":
//         display.innerText = "  ";
//         break;
//       case "DEL":
//         if (display.innerText) {
//           display.innerText = display.innerText.slice(0, -1);
//         }
//         break;
//       case "%":
//         display.innerText = display.innerText / 100;

//         break;
//       case "=":
//         try {
//           display.innerText = eval(display.innerText.slice(0));
//         } catch {
//           display.innerText = "Error!";
//         }

//         break;

//       default:
//         display.innerText += e.target.innerText;
//     }
//   });
// });

// // calculator code
// let display = document.getElementById("display");

// let buttons = Array.from(document.getElementsByTagName("button"));

// buttons.map((button) => {
//   button.addEventListener("click", (e) => {
//     switch (e.target.innerText) {
//       case "AC":
//         display.innerText = "  ";
//         break;
//       case "DEL":
//         if (display.innerText) {
//           display.innerText = display.innerText.slice(0, -1);
//         }

//         break;
//       case "%":
//         display.innerText = display.innerText / 100;

//         break;
//       case "=":
//         try {
//           display.innerText = eval(display.innerText);
//         } catch {
//           display.innerText = " Error!";
//         }

//         break;

//       default:
//         display.innerText += e.target.innerText;
//     }
//   });
// });

 

// // time based greeting
// let time = new Date().getHours()
// let greeting

// if (time < 12) {
//   greeting = "Good morning"
// }
// else if (time >= 12 ) {
//   greeting = "Good afternoon"
// }else {
//   greeting = "Good evening"
// }

// document.getElementById("greeting").innerHTML = greeting;

// // calculator code
// let display = document.getElementById("display");

// let buttons = Array.from(document.getElementsByTagName("button"));

// buttons.map((button) => {
//   button.addEventListener("click", (e) => {
//     switch (e.target.innerText) {
//       case "AC":
//         display.innerText = "  ";
//         break;
//       case "DEL":
//         if (display.innerText) {
//           display.innerText = display.innerText.slice(0, -1);
//         }

//         break;
//       case "%":
//         display.innerText = display.innerText / 100;

//         break;
//       case "=":
//         try {
//           display.innerText = eval(display.innerText);
//         } catch {
//           display.innerText = " Error!";
//         }

//         break;

//       default:
//         display.innerText += e.target.innerText;
//     }
//   });
// });

 

 
