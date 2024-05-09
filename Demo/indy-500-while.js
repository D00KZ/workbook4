"use strict";

let lap = 0;

while (lap <= 500) {
  console.log("Car is on lap " + lap);
  if (lap == 500) {
    console.log("Race Finished");
  }
  lap = lap + 1; //lap++
}

