// 50. Write a JavaScript program that takes an array with mixed data type and calculates the sum of all numbers.

// Test Data :
// ([2, "11", 3, "a2", false, 5, 7, 1]) -> 18
// ([2, 3, 0, 5, 7, 8, true, false]) -> 25
// Expected Output:
// Original array: 2,11,3,a2,false,5,7,1
// Sum all numbers of the said array: 18
// Original array: 2,3,0,5,7,8,true,false
// Sum all numbers of the said array: 25

function sum(arr)
{
    let sum=0;
for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      sum += arr[i];
    }
  }
  return sum
}
let arr1 =[2, "11", 3, "a2", false,true, 5, 7, 1]
console.log(arr1)
console.log(`Sum is: ${sum(arr1)}`)
let arr2 = [2,3,0,5,7,8,true,false]
console.log(arr2)
console.log(`Sum is: ${sum(arr2)}`)