//  given an array of stock prices where the index is the time and the value is the stock price, return the greatest profit that could be made from a single trade.

const stockPrices = [10, 7, 5, 8, 11, 3, 9];

// time complexity: 0(n)
const getMaxProfit = (stockPrices) => {
  let min = stockPrices[0]
  let maxProfit= 0

  stockPrices.forEach(x => {
    min = Math.min(x, min)

    let currentProfit = x - min
    maxProfit = Math.max(currentProfit, maxProfit)
  })

  return maxProfit
}

console.log(getMaxProfit(stockPrices))
