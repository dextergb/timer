// Implement an alarm clock / timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const times = process.argv.slice(2);
for (let time of times) {
  if (time > 0) {
    if (!isNaN(time)) {
      setTimeout(() => {
        process.stdout.write("\x07");
      }, Number(time) * 1000);
    }
  }
}

// Edge cases:
// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.
// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.
// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.
