// 43. Write a JavaScript function to create an array of arrays, ungrouping the elements in an array produced by zip.

// Test Data :
// unzip([['a', 1, true], ['b', 2, false]])
// unzip([['a', 1, true], ['b', 2]])
// Expected Output:
// [["a","b"],[1,2],[true,false]]
// [["a","b"],[1,2],[true]]

function unzip(arr1, arr2) {
  let a = [];
  let b = [];
  let c = [];
  a.push(arr1[0])
  a.push(arr2[0])

  b.push(arr1[1])
  b.push(arr2[1])

  c.push(arr1[2])
  c.push(arr2[2])

  let arr3 = [a, b, c]

  if (a.includes(undefined)) {
    a.splice(a.indexOf(undefined), 1)
  }


  else if (b.includes(undefined)) {
    b.splice(b.indexOf(undefined), 1)
  }

  else if (c.includes(undefined)) {
    c.splice(c.indexOf(undefined), 1)
  }
  return arr3

}
console.log(unzip(['a', 1, true], ['b', 2, false]))

console.log(unzip(['a', 1, true], ['b', 2]))
