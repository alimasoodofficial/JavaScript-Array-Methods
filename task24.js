// 24. Write a JavaScript function to remove. 'null', '0', '""', 'false', 'undefined' and 'NaN' values from an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]


function RemoveJunk(arr){

    for(let i = 0; i <arr.length; i++)
    {
        if(arr[i]==false || arr[i]=='' || isNaN(arr[i]) ||  arr[i]==undefined ||  arr[i]==null || arr[i]==0)
        {
            arr.splice(i,1);  // i is the index and 1 is the number of time we want to delete for i index to end
             i= i-1;

        }

    }
    return arr;
}

function removeJunkPush(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] !== null && arr[i] !== undefined && !isNaN(arr[i]) && arr[i] !== 0 && arr[i] !== '' && arr[i] !== false) {
        result.push(arr[i]);
      }
    }
    return result;
  }

  // function removeFalsyValues(arr) {
  //   return arr.filter(item => item);
  // }

let arr = [NaN, 0, 15, false, -22, '',undefined, 47, null]
console.log(`Orignal Array: `,arr)
console.log(`Removed Values using splice: `,RemoveJunk(arr))
  console.log(`Removed Values using push: `,removeJunkPush(arr)  ); 
  // console.log(`Removed Values using filter: `,removeFalsyValues(arr)); 
  
