// 31. Write a JavaScript function to remove a specific element from an array.

// Test data :
// console.log(remove_array_element([2, 5, 9, 6], 5));
// [2, 9, 6]

function removingElement(arr,value)

{
    for(let i of arr)
    {
        if(arr.includes(value))
        {
           let arr1 =  arr.toSpliced(arr.indexOf(value),1)
           return arr1.filter((values, index) => arr1.indexOf(values) == index && arr1.lastIndexOf(values) == index);
    
        }
        return 'Not Available'
    }
    

}

let arr = [2,2, 5, 9,2, 6]
console.log(removingElement( arr, 2));
//removing a specific element from an array
