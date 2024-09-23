// 11. Write a JavaScript program to find the sum of squares of a numerical vector.

function sumOfSquares(numbers) {
    return numbers.reduce((sum, num) => sum + num * num, 0);
  }
  
  const vector = [2, 4];
  const result = sumOfSquares(vector);
  console.log(result); 
  
