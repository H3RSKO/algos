// Given an array of high scores and a max high score, create a function to sort them in less than 0(n log n)

// time complexity: 0(n)
const scores = [20, 50, 19, 83, 49, 50, 12 ]
const highestScorePossible = 100

const scoreSorter  = (scores, highestScore) => {
  const ansArray = new Array(highestScore).fill(0)
  const ans = []
  scores.forEach(num => {
    ansArray[num] += 1
  })
  ansArray.forEach((x, i) => {
    if( x > 0) {
      while (x > 0) {
        ans.push(i)
        x -= 1
      }
    }
  })
  return ans
}


console.log(scoreSorter(scores, highestScorePossible))
