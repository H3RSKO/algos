// given 2 differenta arrays of integers (take out and eat in orders), copare them to a single array of how the orders were served, and see if they were served in the order they were received or not.

// Time complexity: O(n)
// Space Complexity: O(n)

const takeOutOrders = [17, 8, 24]
const eatInOrders = [12, 19, 2]
const servedOrders  = [17, 8, 12, 19, 24, 2]

const serverChecker = (takeOut, eatIn, served) => {
  // const receivedOrders = []
  let takeOutAns = []
  let eatInAns = []
  let counter = 0
  served.forEach(x => {
    if(takeOutOrders.includes(x)) takeOutAns.push(x)
    else if(eatInOrders.includes(x)) eatInAns.push(x)
  })
  if (takeOutAns.join() === takeOutOrders.join() && eatInOrders.join() == eatInAns.join()) return true
  return false
}

console.log(serverChecker(takeOutOrders, eatInOrders, servedOrders))
