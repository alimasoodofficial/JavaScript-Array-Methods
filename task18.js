// 18. Write a JavaScript program to perform a binary search.
// Note : A binary search or half-interval search algorithm finds the position of a specified input value within an array sorted by key value.
// Sample array :
// var items = [1, 2, 3, 4, 5, 7, 8, 9];
// Expected Output :
// console.log(binary_Search(items, 1)); //0
// console.log(binary_Search(items, 5)); //4

const prompt = require('prompt-sync')();


function binary_Search(arr, key) {
    let size = arr.length;
    let start = 0;
    let end = size - 1;

    while (start <= end) {

        let mid = Math.ceil((start + end) / 2);

        if (arr[mid] == key)
            return mid;

        else if (arr[mid] > key)
            end = mid - 1;
        else {
            start = mid + 1;
        }
    }
    return -1;

}


let arr1 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
let key = prompt("enter the key: ")
let search = binary_Search(arr1, key)
// let mid = (arr1.length)/2

if (search != -1) {
    console.log(search);

}
else
    console.log("not found");



