// Given an array of letters, reverse the order of the words that the letters make
// Time Complexity: O(n)
// Space Complexity" O(1)

const message = [  'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e', ' ',
'f', 'o', 'r', ' ',
'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

const wordReverser = (message) => {
  debugger;
  message = reverser(message, 0, message.length - 1)
  let starter = 0
  for(let i = 0; i <= message.length; i++) {
    if(message[i] === ' ' || i === message.length) {
      reverser(message, starter, i - 1)
      starter = i + 1
    }
  }
  return message

}

const reverser = (array, firstElem, lastElem) => {
  while(firstElem < lastElem) {
    let holder = array[firstElem]
    array[firstElem] = array[lastElem]
    array[lastElem] = holder
    firstElem++
    lastElem--
  }
  return array
}

console.log(wordReverser(message))
