// given 2 differenta arrays of integers (take out and eat in orders), compare them to a single array of how the orders were served, and see if they were served in the order they were received or not. Return true or false


const takeOutOrders = [17, 8, 24]
const eatInOrders = [12, 19, 2]
// const servedOrders  = [17, 8, 12, 19, 24, 2] //true
const servedOrders  = [17, 8, 19, 12, 24, 2] //false


// solution two
// Time complexity: O(n)
// Space Complexity: O(1)
const serverChecker = (takeOut, eatIn, served) => {
  let takeOutIndex = 0
  let eatInIndex = 0
  let servedIndex = 0
  let ans = true
  for(let i = 0; i < served.length; i++) {
    if(served[servedIndex] === takeOut[takeOutIndex]) {
      servedIndex++
      takeOutIndex++
    }
    else if(servedOrders[servedIndex] === eatIn[eatInIndex]) {
      servedIndex++
      eatInIndex++
    }
    else ans = false
  }
  return ans
}

// solution one
// Time complexity: O(n)
// Space Complexity: O(n)

// const serverChecker = (takeOut, eatIn, served) => {
//   // const receivedOrders = []
//   let takeOutAns = []
//   let eatInAns = []
//   served.forEach(x => {
//     if(takeOutOrders.includes(x)) takeOutAns.push(x)
//     else if(eatInOrders.includes(x)) eatInAns.push(x)
//   })
//   if (takeOutAns.join() === takeOutOrders.join() && eatInOrders.join() == eatInAns.join()) return true
//   return false
// }

console.log(serverChecker(takeOutOrders, eatInOrders, servedOrders))
