// Given a sorted array of string that has been "rotated" at some point, find the index of the rotation point.

const words = [
  'ptolemaic',
  'retrograde',
  'supplant',
  'taupplant',
  'tupplant',
  'undulate',
  'xenoepist',
  'asymptote',  // <-- rotates here!
  'babka',
  'banoffee',
  'engender',
  'karpatka',
  'othellolagkage',
  'othiellolagkage',
  'othjellolagkage',
  'othkellolagkage',
];

// Ans 1: Time Complexity: 0(log(n))
// Uses binary search tree method
const rotationLocator = (array) => {
  let floor = 0
  let ceiling = array.length

  while (floor < ceiling) {

    let guessRange = ceiling - floor
    let halfRange = guessRange / 2
    let guessIndex = Math.floor(floor + halfRange)
    // console.log(midPoint)
    if (array[guessIndex] < array[guessIndex - 1]) return guessIndex
    if (array[guessIndex] < array[0]) {
      ceiling = guessIndex
    }
    else {floor = guessIndex}
  }
}

console.log(rotationLocator(words))

