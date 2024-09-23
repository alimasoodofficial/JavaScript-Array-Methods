// 23. Write a JavaScript function to find the difference between two arrays.
// Test Data :
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]
// console.log(difference([1, 2, 3, 4, 5], [1, [2], [3, [[4]]],[5,6]]));
// ["6"]
// console.log(difference([1, 2, 3], [100, 2, 1, 10]));
// ["3", "10", "100"]



function difference(arr1, arr2) {
    const set1 = new Set(arr1);
    const set2 = new Set(arr2);
    // console.log("...set1",...set1)
    // console.log("...set1",set1)

  
    const diff1 = [...set1].filter(item => !set2.has(item));
    const diff2 = [...set2].filter(item => !set1.has(item));
  
    return [...diff1, ...diff2];
  }

  let arr1=[1, 2, 3, 4, 5];
  let arr2=[ 1, [2], [3, [4]],[5,6]];
  console.log(difference([1, 2, 3], [100, 2, 1, 10]));

  // console.log(difference(arr1,arr2.flat(Infinity)));
  

