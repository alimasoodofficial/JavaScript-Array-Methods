// 8. Write a JavaScript program to find the most frequent item in an array.
// Sample array : var arr1=[3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Sample Output : a ( 5 times )



var arr1=['A',1,3, 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3,1,'A','A','A','A'];

var frequent = 0;
var most_frequent = 1;
var frequent_value;

for(let i=0;i<arr1.length ;i++)
{
    for(let j = i;j<arr1.length;j++)
    {
        if(arr1[j] == arr1[i])
        {
            frequent++
            if(most_frequent<frequent)
            {
                 most_frequent = frequent;
                 frequent_value = arr1[i]

            }
        }
    }
    frequent = 0;
}
console.log(frequent_value,most_frequent)
