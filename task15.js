// 15. We have the following arrays :
// color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];
// o = ["th","st","nd","rd"]
// Write a JavaScript program to display the colors in the following way :
// "1st choice is Blue ."
// "2nd choice is Green."
// "3rd choice is Red."
// - - - - - - - - - - - - -


color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];


for(let i=0;i<color.length;i++)
{
    if(color[i] == color[0])
    console.log(`1st choice is ${color[i]}`)
    else if(color[i] == color[1])
    console.log(`2nd choice is ${color[i]}`)
    else if(color[i] == color[2])
    console.log(`3rd choice is ${color[i]}`)
    else 
    console.log(`${i+1}th choice is ${color[i]}`)

}
