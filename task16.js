// 16. Write a JavaScript program to find the leap years in a given range of years.


let years = [2024,2035,2011,2000,2016,2023];

for(let i =0;i<years.length;i++)
{
    if(years[i] % 4 ==0)
    {
        console.log(`${years[i]} is a Leap Year`)
    }
    else{
        console.log(`${years[i]} is not a Leap Year`)

    }
}