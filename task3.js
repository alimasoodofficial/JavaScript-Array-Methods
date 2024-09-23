
// 3. Write a JavaScript function to get the first element of an array. Passing the parameter 'n' will return the first 'n' elements of the array.
// Test Data :
// console.log(first([7, 9, 0, -2]));
// console.log(first([],3));
// console.log(first([7, 9, 0, -2],3));
// console.log(first([7, 9, 0, -2],6));
// console.log(first([7, 9, 0, -2],-3));
// Expected Output :
// 7
// []
// [7, 9, 0]
// [7, 9, 0, -2]
// []

const arr1 = [1,2,3,4];
const arr2 = [[],2,3,4];
const arr3 = [[1,2,3,4],2,3,4];
const arr4 = [["Ali"],2,3,4];

console.log(arr1.at(0))
console.log(arr2.at(0))
console.log(arr3.at(0))
console.log(arr4.at(0))