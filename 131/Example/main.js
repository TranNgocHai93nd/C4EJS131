
/*Array methods:
    forEach()
    every()
    some()
    filter()
    find()
    map()
    reduce()
*/
const courses = [
    {
        id: 1,
        name: 'Javascript',
        coin: 60
    },
    {
        id: 2,
        name: 'jav',
        coin: 50
    },
    {
        id: 3,
        name: 'PHP',
        coin: 100
    },
    {
        id: 4,
        name: 'ReactJS',
        coin: 60
    },
]
//Systag Array.method(function)
  

// let sumCoin = 0;
// for (let course of courses) {
//     sumCoin +=course.coin;
// }
//  console.log(sumCoin);
//  let totalCoin = courses.reduce(myFunction)
//  let i=0;
//  function myFunction (accumulator,currentValue,currentIndex, originArray) {
    
  
//     console.log(accumulator,currentValue);
//     return accumulator + currentValue.coin;
    
    
//  }
// console.log(totalCoin);
// let numbers = [60,[50,100],60]
// let totalx = numbers.reduce((total,value) => {
//     return total + value;
// })
// console.log(totalx);
let numbers = [60,[50,[100]],60]
let myArray = numbers.reduce(totalArray,[])
function totalArray (total,value) {
  
    return total.concat(value);
}
console.log(myArray);