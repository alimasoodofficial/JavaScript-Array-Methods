// 14. Write a JavaScript program to remove duplicate items from an array (ignore case sensitivity).

// let arr=['a','b','d','a','c','a','a','a','a','b','d','r']

// for(let i=0;i<arr.length ;i++)
// {
//     for(let j = 1;j<=arr.length;j++)
//     {
//         if(arr[i]==arr[j])
//         {

//            var arr1 = arr.splice(0,1)

//         }
        
//     }

// }
// console.log(arr1)
// console.log(arr)


function removeDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
  }
  
  let arr=['a','b','d','a','c','a','a','a','a','b','d','r']
  arr = removeDuplicates(arr);
  console.log(arr); 
  
