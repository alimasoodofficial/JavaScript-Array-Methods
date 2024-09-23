// 29. Write a JavaScript function to fill an array with values (numeric, string with one character) within supplied bounds.

// Test Data :
// console.log(num_string_range('a', "z", 2));
// ["a", "c", "e", "g", "i", "k", "m", "o", "q", "s", "u", "w", "y"]

function num_string_range(char1,char2,number)
{
    let arr = []
    let asciiCode1 = char1.charCodeAt();
    let asciiCode2 = char2.charCodeAt();


    for(let i= asciiCode1; i<= asciiCode2; i++)
    {
        if(i%number!=0)
        {
            arr.push(String.fromCharCode(i))

        }
    
    }
    return arr;

}

console.log(num_string_range('a','z',2))

