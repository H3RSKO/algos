// given two arrays of orders and a third array of deliveries, see if the orders are delivered in the same order they were received.

// True
const onlineOrders = [17, 8, 24]
const phoneOrders = [12, 19, 2]

// False
// const onlineOrders = [17, 2, 24]
// const phoneOrders = [12, 19, 8]
const deliveries = [17, 8, 12, 19, 24, 2]

// Ans 1: Time Complexity 0(n)
const serveChecker = (onlineOrders, phoneOrders, deliveries) => {
  let onlineChecker = 0
  let phoneChecker = 0
  let counter = 0
  const checker = (orderList, checkerNumber) => {
    return orderList[checkerNumber] === deliveries[counter]
  }

  while (counter < deliveries.length) {
    if (checker(onlineOrders, onlineChecker)) {
      counter++
      onlineChecker++
    }else if (checker(phoneOrders, phoneChecker)) {
      counter++
      phoneChecker++
    } else return false
  }
  return true
}

console.log(serveChecker(onlineOrders, phoneOrders, deliveries))
