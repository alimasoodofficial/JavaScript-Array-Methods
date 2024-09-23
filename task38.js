// 38. Write a JavaScript function to move an array element from one position to another.

// Test Data :
// console.log(move([10, 20, 30, 40, 50], 0, 2));
// [20, 30, 10, 40, 50]
// console.log(move([10, 20, 30, 40, 50], -1, -2));
// [10, 20, 30, 50, 40]


function move(arr, index1, index2) {
    while (index1 < 0) {
        index1 += arr.length;
    }
    while (index2 < 0) {
        index2 += arr.length;
    }

    arr.splice(index2, 0, arr.splice(index1, 1)[0]);

    return arr;
}

console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));

