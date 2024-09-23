// 12. Write a JavaScript program to compute the sum and product of an array of integers.

const arr = [2, 4];
let sum =0;
let product=1;

for(let i=0;i<arr.length;i++)
{
    
    sum += arr[i];
    product *= arr[i];

    
}


console.log("Sum: ",sum," Product: ",product)
