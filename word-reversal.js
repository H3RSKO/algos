// Given an array of letters, reverse the order of the words that the letters make
// Time Complexity: O(n)
// Space Complexity" O(1)

const message = [  'e', 'v', 'e', 'r', 'y', 'o', 'n', 'e', ' ',
'f', 'o', 'r', ' ',
'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

const wordReverser = (message) => {
  const joinedMessage = message.join('').split(' ') // O(n)

  let firstElem = 0
  let lastElem = joinedMessage.length - 1
  while(firstElem < lastElem) {
    let holder = joinedMessage[firstElem]
    joinedMessage[firstElem] = joinedMessage[lastElem]
    joinedMessage[lastElem] = holder
    firstElem++
    lastElem--
  }
  return joinedMessage.join(' ')
}

console.log(wordReverser(message))
