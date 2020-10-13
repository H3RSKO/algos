// Bloomberg Q: Given a string of 'A' and 'B's, how many characters need to be deleted to make sure there are only alternating characters.

// Time complexity: 0(n)

const strng = 'aaabbaab' // 4

const adjacentChars = (strng) => {
  let count = 0
  let prevLetter = strng.substring(0, 1)
  for (let i = 1; i < strng.length; i++) {
    const nextLetter = strng.substring(i, i + 1)
    if (nextLetter === prevLetter) count++
    prevLetter = nextLetter
  }
  return count
}

console.log(adjacentChars(strng))
