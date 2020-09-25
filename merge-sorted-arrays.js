// Given two sorted arrays, merge them into a single sorted array

const firstArray = [3, 4, 6, 10, 11, 15];
const secondArray = [1, 5, 8, 12, 14, 19];


const mergeArrays = (firstArray, secondArray) => {
   const ans = []
   while(firstArray.length || secondArray.length) {
     if(firstArray[0] <= secondArray[0]) ans.push(firstArray.shift())
     else {ans.push(secondArray.shift())}
   }
   return ans
}




console.log(mergeArrays(firstArray, secondArray));
