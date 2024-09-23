// 45. Write a JavaScript program to find all the unique values in a set of numbers.

// Test Data :
// [1, 2, 2, 3, 4, 4, 5]
// [1, 2, 3, 4, 5]
// [1, -2, -2, 3, 4, -5, -6, -5]
// Expected Output:
// [1,2,3,4,5]
// [1,2,3,4,5]
// [1,-2,3,4,-5,-6]


function uniqueValues(arr)
{
    return arr.filter((value, index) => arr.indexOf(value) == index  );
}
console.log(uniqueValues([1, 2, 2, 3, 4, 4, 5]))
console.log(uniqueValues([1, -2, -2, 3, 4, -5, -6, -5]))