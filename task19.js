// 19. There are two arrays with individual values. Write a JavaScript program to compute the sum of each individual index value in the given array.
// Sample array :
// array1 = [1,0,2,3,4];
// array2 = [3,5,6,7,8,13];
// Expected Output :
// [4, 5, 8, 10, 12, 13]

let array1 = [1,0,2];
let array2 = [3,5,6,7,8,13];
let array3 = []

for(let i = 0 ; i<array2.length;i++){

    if(array1.length<array2.length)
    {
        array1.push(0);
    }

    else if(array1.length>array2.length)
    {
        array2.push(0);
    }
    
     array3.push(array2[i] + array1[i]) 

}

console.log(array3)
