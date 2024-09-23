// 22. Write a JavaScript program to compute the union of two arrays.
// Sample Data :
// console.log(union([1, 2, 3], [100, 2, 1, 10]));
// [1, 2, 3, 10, 100]

function union(arr1, ...arr2) {
  // console.log(b)
    return arr1,arr2;
    
  }
const arr1 = [6,7,8]
const a1 =  [...arr1,1,2,3];
const a2 =  [2,4,6];
console.log(union(a1,a2));

// read rest and spread operator