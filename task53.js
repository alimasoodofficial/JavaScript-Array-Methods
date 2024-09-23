// 53. Write a JavaScript program to count the number of arrays inside a given array.

// Test Data :
// ([2,8,[6],3,3,5,3,4,[5,4]]) -> 2
// ([2,8,[6,3,3],[4],5,[3,4,[5,4]]]) -> 3
// Expected Output:
// Number of arrays inside the said array: 2
// Number of arrays inside the said array: 3

// function counting_arrays(arr){

//     let counter = 0;
//     let Mulit_counter = 0
//         for(let i=0;i<arr.length;i++)
//         {
//             if(Array.isArray(arr[i]))
//             {
//                 counter++
//                 if(Array.isArray(arr[arr[i]])){
//                     Mulit_counter++
//                 }

//             }
//         }
//         return [counter,Mulit_counter];
// }

function countArraysAtDepth(arr) {
  const counts = [];

  function countHelper(array, depth) {
    depth = depth || 0;
    if (!counts[depth]) {
      counts[depth] = 0;
    }
    counts[depth]++;

    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i])) {
        countHelper(array[i],1);
      }
    }
  }

  countHelper(arr);
  return counts;
}



console.log(countArraysAtDepth([2, 8, [6], 3, 3, 5, 3, 4, [5, 4]]))
console.log(countArraysAtDepth([2, 8, [6, 3, 3], [4], 5, [3, 4, [5, 4]]]))

