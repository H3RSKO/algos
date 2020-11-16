// Given an array of integers, find the highest product you can get from three of the integers.

const numArray = [10, 93, 65, 1, 5, 95, 28] // 93*65*95 = 574,275
// const numArray = [1, 10, -5, 1, -100] // -5 * -100 * 1 = 5,000

// Ans 1:
//  Time comolexity O(n)
const hidghestProd = (anArray) => {
  let highest  = Math.max(anArray[0], anArray[1])
  let lowest  = Math.min(anArray[0], anArray[1])

  let highestOf2 = anArray[0] * anArray[1]
  let lowestOf2 = anArray[0] * anArray[1]

  let ans = anArray[1] * anArray[2] 

  for (let i = 2; i < anArray.length; i++) {
    let currentNum = anArray[i]

    if (currentNum * highestOf2 > ans) ans = currentNum * highestOf2
    if (currentNum * lowestOf2 > ans) ans = currentNum * lowestOf2

    if (currentNum * highest > highestOf2) highestOf2 = currentNum * highest
    if (currentNum * lowest < lowestOf2) lowestOf2 = currentNum * lowest
    if (currentNum * highest < lowestOf2) lowestOf2 = currentNum * highest
    if (currentNum * lowest > highestOf2) highestOf2 = currentNum * lowest

    if (currentNum > highest) highest = currentNum
    if (currentNum < lowest) lowest = currentNum
  }
  return ans
}

console.log(hidghestProd(numArray))
