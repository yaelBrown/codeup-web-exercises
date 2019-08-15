================================= BOM CHALLENGES
CHALLENGE 1: Build a Jack-In-The-Box
Define an object called jackBox.
Include properties for...
   triggered - whether or not the box has been sprung (should be false by default)
  intervalId - set to null
      play() - once called, if triggered is false, console.log one new element in the lyrics array every second
               after the lyrics, stop the interval, set the triggered property to true, and alert POP!
    windUp() - once called will stop the play() method and set triggered to false
      lyrics - an array with the following elements:
    "All a-...",
    "-round the ...",
    "mulberry...",
    "bush, The...",
    "monkey...",
    "chased the...",
    "wea-...",
    "-sel...",
    "The monkey...",
    "stopped to...",
    "pull up his...",
    "sock,...",
    "Pop!...",
    "goes the...",
    "wea-...",
    "-sel."
    Include methods for...
CHALLENGE 2: Build a Stop Watch
  Define an object called stopWatch.
  Include the following properties...
    intervalId
    count
  Include the following methods...
    start() - starts console logging an increasing count every second
    pause() - pauses counter
    reset() - stops counter and resets count to zero