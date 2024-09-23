// 48. Write a JavaScript program that takes an array of integers and returns false if every number is not prime. Otherwise, return true.

// Test Data :
// ([2,3,5,7]) -> true
// ([2,3,5,7,8]) -> false
// Expected Output:
// Original array of integers: 2,3,5,7
// In the said array check every numbers are prime or not! true
// Original array of integers: 2,3,5,7,8
// In the said array check every numbers are prime or not! false

const prompt = require("prompt-sync")();

const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

if (number === 1) {
    console.log("1 is neither prime nor composite number.");
}

else if (number > 1 ) {

    // Math.abs(number)
    // looping through 2 to number-1
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is a not prime number`);
    }
}

// check if number is less than 1
else {
    console.log("The number is not a prime number.");
}
