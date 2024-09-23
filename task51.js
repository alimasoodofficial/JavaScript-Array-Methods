// 51. Write a JavaScript program to check if an array is a factor chain or not.

// A factor chain is an array in which the previous element is a factor of the next consecutive element. The following is a factor chain:
// [2, 4, 8, 16, 32]
// // 2 is a factor of 4
// // 4 is a factor of 8
// // 8 is a factor of 16
// // 16 is a factor of 32

// Test Data :
// ([2, 4, 8, 16, 32]) -> true
// ([2, 4, 16, 32, 64]) -> true
// ([2, 4, 16, 32, 68]) -> false

function factor(arr)
{
    let factors = 0;

    for(let i =0;i<=arr.length;i++)
    {
        if(arr[i] * 2 == arr[i+1])
        {
            factors++;
        }
        
    }
    // console.log(factors)
    if(factors < arr.length-1)
    {
        return false
    }
    else
    return true

}
console.log(factor([2, 4, 8, 16, 32,64]))//true
console.log(factor([2, 4, 16, 32, 68]))//false