// Write a function that takes an array of characters and reverses the letters in place
// time complexity: 0(n)
// space complexity 0(1)

const array = ['a', 'b', 'c', 'd']

const reverser = (array) => {
  // const ans = []

  let frontElem = 0
  let lastElem = array.length - 1

  while (frontElem < lastElem) {
    let holder = array[frontElem]
    array[frontElem] = array[lastElem]
    array[lastElem] = holder
    frontElem++
    lastElem--
  }
  return array
}
console.log(reverser(array))
