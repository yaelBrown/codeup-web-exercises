console.log("conditionals lecture.js file");

// function evaluateTsrafficLgt(str) {
//   if (str === "red") {
//     console.log("STOP!");
//   } else if (str === "yellow") {
//     console.log("Get ready to stop!");
//   } else {
//     console.log("Go Go Go!");
//   }
// }

function evaluateTrafficLgt(str) {
  switch (str) {
    case "red":
      console.log("Stop");
      break;
    case "yellow":
      console.log("Get ready to stop");
      break;
    case "green":
      console.log("Gogogogogogo!");
      break;
    default:
      console.log("Enter a valid light color! (red green or yellow");
      break;
  }
}



evaluateTrafficLgt("red");
evaluateTrafficLgt("yellow");
evaluateTrafficLgt("green");
evaluateTrafficLgt("magenta");