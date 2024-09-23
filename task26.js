// 26. Write a JavaScript program to find a pair of elements (indices of the two numbers) in a given array whose sum equals a specific target number.

// Input: numbers= [10,20,10,40,50,30,70], target=50
// Output: 2, 3

function SumofPair(arr,key)
{
    for(let i=0;i<arr.length;i++ )

        for(let j=1;j<=i;j++)
        {
            if(arr[i] + arr[j] == key)
            {

               
                console.log(i,j)
                console.log(arr[i],arr[j])


            }
        }
}

let arr= [10,20,35,35,50,60,70];
const key=70;
console.log(SumofPair(arr,key))



