// Given two sorted arrays, merge them into a single sorted array

const firstArray = [3, 4, 6, 10, 11, 15];
const secondArray = [1, 5, 8, 12, 14, 19];

// Using built in JS Methods
// Time Comlplexity: O(n)
// Space Complexity: O(n)
// const mergeArrays = (firstArray, secondArray) => {
//    const ans = []
//    while(firstArray.length || secondArray.length) {
//      if(firstArray[0] <= secondArray[0]) ans.push(firstArray.shift())
//      else {ans.push(secondArray.shift())}
//    }
//    return ans
// }

// No built in JS Methods
// Time Comlplexity: O(n)
// Space Complexity: O(n)
const mergeArrays = (firstArray, secondArray) => {
  debugger;
  let ans = []
  let firstIndex = 0
  let secondIndex = 0
  let ansIndex = 0

  while (ansIndex <= firstArray.length + secondArray.length) {
    const firstArrayDone = firstIndex >= firstArray.length
    const secondArrayDone = secondIndex >= secondArray.length
    if (!firstArrayDone && (secondArrayDone || firstArray[firstIndex] <= secondArray[secondIndex]) ){
      ans[ansIndex] = firstArray[firstIndex]
      firstIndex++
    }
    else if(!secondArrayDone && (firstArrayDone || secondArray[secondIndex] <= firstArray[firstIndex])) {
      ans[ansIndex] = secondArray[secondIndex]
      secondIndex++
    }
    ansIndex++
  }
  return ans
}

console.log(mergeArrays(firstArray, secondArray));
