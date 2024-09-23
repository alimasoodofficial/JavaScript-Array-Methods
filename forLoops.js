

let numbers = [2,4,6,8,10]
console.log("***Simple For loop***")

for(let i = 0;i<numbers.length;i++)
{
    console.log(numbers[i])
}

console.log("---------------")
console.log("***For Each***")


numbers.forEach((elements )=> {
    console.log(elements)
})

console.log("---------------")
console.log("***For of***")


for(let i of numbers){
    console.log(i)
}
console.log("---------------")
console.log("***For in***")

for(let i in numbers){
    console.log(numbers[i])

}