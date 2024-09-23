// 40. Write a JavaScript function to generate an array of integer numbers, increasing one from the starting position, of a specified length.


function array_range(start,end)
{
    let arr=[]
    for(let i =start;i<=end;i++)
    {
     arr.push(i)   
    }
    return arr
}
console.log(array_range(1,4))
console.log(array_range(-6,4))