// 17. Write a JavaScript program to shuffle an array.


let arr = [1,3,5,7,9];

function shuffleArray(array) {
    for (var i = 0;i<array.length;i++) { 
   
        var j = Math.floor(Math.random() * (i + 1));
                   
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
       
    return array;
 }

 console.log(shuffleArray(arr))