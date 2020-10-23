// To build a word cloud, given a body of text, create a map for many times each word appears in the text

// const text = 'Chocolate cake for dinner and pound cake for dessert'
const text = "We came, we saw, we conquered...then we ate Bill's (Mille-Feuille) cake."

// Ans 1
// Time Complexity: 0(n). does not work for edge cases
// const wordClouder = (text) => {
//   let ans = {}
//   let lcText = text.toLowerCase().split(' ') // 0(n)
//   for (let word of lcText) {  // 0(n)
//     if (Object.keys(ans).includes(word)) ans[word] += 1
//     else {ans[word] = 1}
//   }
//   return ans
// }


// Ans 2: Time complexity 0(n). Works with edge cases
const isLetterHelper = (char) => {
  return 'abcdefghijklmnopqrstuvwxyz'.includes(char)
}

const wordClouder = (text) => {
  let ans = new Map()
  let currentWord = []
  for (let i = 0; i < text.length; i++) {
    let currentChar = text[i]
    if (isLetterHelper(currentChar.toLowerCase())) currentWord.push(currentChar.toLowerCase())
    if (currentChar === ' ') {
      if (ans.has(currentWord.join(''))) ans.set(currentWord.join(''), ans.get(currentWord.join('')) + 1)
      else {ans.set(currentWord.join(''), 1)}
      currentWord = []
    }
  }
  return ans
}

console.log(wordClouder(text))
