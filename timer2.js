// Instead of receiving all the timers ahead of time via process.argv,
// let's listen for user input and set timers "on demand".
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Input: ", (key) => {
  if (key === "b") {
    process.stdout.write("\x07");
  }
  if (key <= 9 && key >= 1 && typeof key !== !NaN) {
    process.stdout.write(`Setting timer for ${key} seconds...\n`);
    setTimeout(() => {
      process.stdout.write("\x07");
    }, key * 1000);
  }
  if (key === "\u0003") {
    console.log("Thanks for using this broken alarm clock, caio!");
    process.exit();
  }
});

// 1. The user can press b and it should beep right away
// 2. The user can input any number from 1 to 9 and it should
// immediately output "setting timer for x seconds...", and
// beep after that number of seconds has passed
// 3. The user can use ctrl + c to exit the program,
// at which point the program should say "Thanks for using me, ciao!" before terminating

// Edge cases:
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
