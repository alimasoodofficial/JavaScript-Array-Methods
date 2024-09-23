// 13. Write a JavaScript program to add items to a blank array and display them.
const prompt = require('prompt-sync')();
// let numbers = prompt("Enter numbers");
let numbers = [];
console.log("Before: ",numbers)
let tN = prompt("total Number: ")


for(let i=0;i<tN;i++)
{
numbers.push(parseInt(prompt("Enter : ")))
}

for(let i=0;i<numbers.length;i++)
{
    console.log("Element ",i+1,"= ",numbers[i])
}
console.log(numbers)
