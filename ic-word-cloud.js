// To build a word cloud, given a body of text, create a map for many times each word appears in the text

const text = 'Chocolate cake for dinner and pound cake for dessert'

// Ans 1
// Time Complexity: 0(n)
const wordClouder = (text) => {
  let ans = {}
  lcText = text.toLowerCase().split(' ') // 0(n)
  for (let word of lcText) {  // 0(n)
    if (Object.keys(ans).includes(word)) ans[word] += 1
    else {ans[word] = 1}
  }
  return ans
}

console.log(wordClouder(text))
