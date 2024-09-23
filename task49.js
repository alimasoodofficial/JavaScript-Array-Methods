// 49. Write a JavaScript program that takes an array of numbers and returns the third smallest number.

// Test Data :
// (2,3,5,7,1) -> 3
// (2,3,0,5,7,8,-2,-4) -> 0
// Expected Output:
// Original array of numbers: 2,3,5,7,1
// Third smallest number of the said array of numbers: 3
// Original array of numbers: 2,3,0,5,7,8,-2,-4
// Third smallest number of the said array of numbers: 0

function smallest(arr){

   let arr1 = arr.toSorted(function(a, b){return a-b})
    return arr1[2]
  }
  let arr1 = [2,3,5,7,1]
  let arr2 = [2,3,0,5,7,8,-2,-4]
console.log(`Orignal Array of numbers: ${arr1}`)
console.log(`Third smallest number of the said array of numbers: ${smallest(arr1)}`)
console.log(`Orignal Array of numbers: ${arr2}`)
console.log(`Third smallest number of the said array of numbers: ${smallest(arr2)}`)
