// 32. Write a JavaScript function to find an array containing a specific element.

// Test data :
// arr = [2, 5, 9, 6];
// console.log(contains(arr, 5));
// [True]



function contains(arr,value){
    return arr.includes(value);
}

let arr = [1,2,3,4,5]
console.log(contains(arr,6))
// console.log(arr.includes(5));

