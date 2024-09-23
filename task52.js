// 52. Write a JavaScript program to get all the indexes where NaN is found in a given array of numbers and NaN.

// Test Data :
// ([2, NaN, 8, 16, 32]) -> [1]
// ([2, 4, NaN, 16, 32, NaN]) -> [2,5]
// ([2, 4, 16, 32]) ->[]
// Expected Output:
// Original array: 2,NaN,8,16,32
// Find all indexes of NaN of the said array: 1
// Original array: 2,4,NaN,16,32,NaN
// Find all indexes of NaN of the said array: 2,5
// Original array: 2,4,16,32
// Find all indexes of NaN of the said array:

function find_NaN(arr){

    let found = [];
    for(let i=0;i<arr.length;i++)
    {
        if(isNaN(arr[i]))
        found.push(i)    
    }
    return found
}

console.log(find_NaN([2 ,3,NaN, 8,NaN, 16, 32]))
