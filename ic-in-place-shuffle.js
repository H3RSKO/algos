// Write a function for doing an in-place shuffle of an array.

let array = [1, 2, 3, 4, 5]

// Ans 1: Time Complexity: 0(n^n)
// const inPlaceShuffle = (array) => {
//   for (let i = 0; i < array.length; i++) {
//     let randomNum = getRandom(0, array.length)
//     let currentNum = array[i]
//     array.splice(i, 1, array[randomNum]) // 0(n)
//     array.splice(randomNum, 1, currentNum) // 0(n)
//   }
// }

// Ans 2: Time Complexity: 0(n)
// Uses Fisher-Yates shuffle
const inPlaceShuffle = (array) => {
  let length = array.length - 1
  while (length >= 0) {
    let currentNum = array[length]
    let randomNum = getRandom(0, length)
    array[length] = array[randomNum]
    array[randomNum] = currentNum
    length--
  }
}

const getRandom = (floor, ceiling) => {
  return Math.floor(
    // .5 * (4 - 1) + 1
    Math.random() * (ceiling - floor) + floor
  )
}


console.log(array)
inPlaceShuffle(array)
console.log(array)


