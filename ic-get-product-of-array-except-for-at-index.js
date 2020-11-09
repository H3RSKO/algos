// You have an array of integers, and for each index you want to find the product of every integer except the integer at that index.
// catch: cant use division

const anArray = [1, 2, 3, 4] // [ 24, 12, 8, 6 ]
// const anArray = [1, 2, 6, 5, 9] // [540, 270, 90, 108, 60]

// ans 1: time complexity: O(n)
const getProductsOfAllIntsExceptAtIndex = (anArray) => {
  let ans = []

  let currentProduct = 1
  for (let i = 0; i < anArray.length; i++) {
    ans[i] = currentProduct;
    currentProduct *= anArray[i];
  }

  currentProduct = 1
  for (let j = anArray.length - 1; j >= 0; j--) {
    ans[j] *= currentProduct;
    currentProduct *= anArray[j];
  }

  return ans
}

console.log(getProductsOfAllIntsExceptAtIndex(anArray))
