// 30. Write a JavaScript function that merges two arrays and removes all duplicate elements.

// Test data :
// var array1 = [1, 2, 3];
// var array2 = [2, 30, 1];
// console.log(merge_array(array1, array2));
// [3, 2, 30, 1]


function MergeArray(arr1,arr2)
{
    let arr3=[]

    if(arr1.length>arr2.length)
    {
        arr2.push(0);
    }
    else if(arr1.length<arr2.length3)
    {
        arr1.push(0);
    }
    else{
        return [...new Set([...arr1, ...arr2])];


        }
        
        
       
    }



let arr1 = [1, 2, 3];
let arr2 = [2, 30, 1];
console.log(MergeArray(arr1,arr2))