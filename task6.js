// 6. Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number. For example if you accept 025468 the output should be 0-254-6-8.

// function dashes (value){
// var temp = 0;
//  value = new Array(value);
//     for(let i=0;i<value.length;i++)
//     {
        
//          value.join('-')
        
//         }
//     }
    


const prompt = require('prompt-sync')();
let arr  =prompt("enter input: ")

new_array= [arr[0]]

for(let i =1;i<=arr.length;i++)
{
    if(arr[i-1]%2==0 &&arr[i]%2==0)
    {
        new_array.push('-',arr[i])

    }
    else{
        new_array.push(arr[i])
    }
}
console.log(new_array.join(" "))


