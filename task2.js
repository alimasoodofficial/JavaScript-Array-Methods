// 2. Write a JavaScript function to clone an array.
// Test Data :
// console.log(array_Clone([1, 2, 4, 0]));
// console.log(array_Clone([1, 2, [4, 0]]));
// [1, 2, 4, 0]
// [1, 2, [4, 0]]




const old_array1 = [1, 2, 4, 0];
// const new_array1 = old_array1.with(2,[4,0]);
// new_array1.pop();
 old_array1.splice(0,1);


console.log("Old Array: ",old_array1)
// console.log("New Array: ",new_array1)