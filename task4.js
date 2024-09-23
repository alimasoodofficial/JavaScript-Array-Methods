// 4. Write a JavaScript function to get the last element of an array. Passing the parameter 'n' will return the last 'n' elements of the array.
// Test Data :
// console.log(last([7, 9, 0, -2]));
// console.log(last([7, 9, 0, -2],3));
// console.log(last([7, 9, 0, -2],6));
// Expected Output :
// -2
// [9, 0, -2]
// [7, 9, 0, -2]

const arr1 = [1,2,3,4];
const arr2 = [[],2,3,4];
const arr3 = [[1,2,3,4],2,3,4];
const arr4 = [["Ali"],2,3,4];

console.log(arr1.at(3))
console.log(arr2.at(3))
console.log(arr3.at(3))
console.log(arr4.at(3))

// console.log(arr1.findLast())
// console.log(arr2.findLast())
// console.log(arr3.findLast())
// console.log(arr4.findLast())
// Used only with specific case scenario while giving condition
