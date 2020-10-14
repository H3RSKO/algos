// given an array of coin flips, how many coins do you need to change to make all flips alternating between haeds and tails.


// Time complexity: 0(n)

const coinFlips = [1, 0, 1, 1, 0, 1, 1, 1, 1] // 3

const consecutiveChecker = (coinFlips) => {
  debugger;
  let ans = 0
  let currentCoin = 0
  while (currentCoin < coinFlips.length) {
    if (coinFlips[currentCoin] === coinFlips[currentCoin + 1]) {
      if (coinFlips[currentCoin] === coinFlips[currentCoin + 2]) {
        ans ++
        currentCoin += 2
      } else {
      ans++
      currentCoin++
    }
    } else {
    currentCoin++
    }
  }
  return ans
}

console.log(consecutiveChecker(coinFlips))
