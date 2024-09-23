// 35. Write a JavaScript function to get random items from an array.

let arr = [2,4,6,8,10];

function Random(arr) {
   
        let random = Math.floor(Math.random() * arr.length);
        return (arr[random])
                    
       
 }
  console.log(Random(arr))