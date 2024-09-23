// 9. Write a JavaScript program that accepts a string as input and swaps the case of each character. For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'

const prompt = require('prompt-sync')();

function swapCase(str) {
    let newStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i].toUpperCase()) 
      {
        newStr += str[i].toLowerCase();
      } else {
        newStr += str[i].toUpperCase();
      }
    }
    return newStr;
  }
  
  const inputString =prompt("Enter You Input: ");
  const outputString = swapCase(inputString);
  console.log(outputString); 
  