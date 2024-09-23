// 34. Write a JavaScript function to get the nth largest element from an unsorted array.
// Test Data :
// console.log(nthlargest([ 43, 56, 23, 89, 88, 90, 99, 652], 4));
// 89

// function largest(arr)
// {
//     let largest=0
//     for(let i=0; i<arr.length;i++)
//     {
//         largest  = arr[0]
//         for(let j = i+1;j<=arr.length;j++)
//         {

//             if(arr[j]>largest)
//             {
//                 largest = arr[j]
//             }
//         }
//         return largest

//     }

// }

function nth_largest(arr,value){

  arr1 = arr.toSorted(function(a, b){return b-a})
  return arr1[value-1]
}

let arr=[ 43, 56, 23, 89, 88, 90, 99, 652];


console.log(nth_largest(arr,4))

// console.log(largest(arr))
// console.log(Math.max(...arr))