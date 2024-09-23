// 27. Write a JavaScript function to retrieve the value of a given property from all elements in an array.
// Sample array : [NaN, 0, 15, false, -22, '',undefined, 47, null]
// Expected result : [15, -22, 47]

function PushingTrueValues(arr) {
   

    return arr.filter(a=>a)
  }

  console.log(PushingTrueValues([NaN, 0, 15, false, -22, '',undefined, 47, null]))