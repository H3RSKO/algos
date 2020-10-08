// Check if any string contains the possibility of a palindrome.

const string = 'civic' // true
// const string = 'ivicc' // true
// const string = 'civil' // false
// const string = 'livci' // false

// Ans 1
// Time Complexity: 0(n)
const possiblePalindromeChecker = (string) => {
  const ans = {}
  string.split('').forEach(x => {
    if(Object.keys(ans).includes(x)) ans[x] += 1
    else {ans[x] = 1}
  })
  // if more than one value is odd return false
  const finalAns = Array.from(Object.values(ans)).filter(x => x % 2)
  if (finalAns.length > 1) return false
  return true
}

console.log(possiblePalindromeChecker(string))
