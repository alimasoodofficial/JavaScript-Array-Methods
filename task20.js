// 20. Write a JavaScript program to find duplicate values in a JavaScript array.

//show duplicated item 1 time only


function findDuplicates(arr) {
    return arr.filter((item, index) => arr.indexOf(item) == index && arr.lastIndexOf(item) == index);
}
  
  const numbers = [1, 2, 3, 2, 4, 5, 1,1,1,1,2];
  const duplicates = findDuplicates(numbers);
  console.log(duplicates); 
  