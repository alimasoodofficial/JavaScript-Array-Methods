// 42. Write a JavaScript function to find unique elements in two arrays.

// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]

function unique(arr1,arr2)
{
   arr1= arr1.flat(Infinity)
   arr2= arr2.flat(Infinity)
    let arr3 = arr1.concat(arr2)
    arr3.sort(function compareNumbers(a, b) { return a - b; } )
    return arr3.filter((item, index) => arr3.indexOf(item) == index );

}

console.log(unique([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]))
console.log(unique([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["1", "2", "3", "4", "5", "6"]
console.log(unique([1, 2, 3], [100, 2, 1, 10]));
// ["1", "2", "3", "10", "100"]