
/*Array methods:
    forEach()
    every()
    some()
    filter()
    find()
    map()
    reduce()
*/
// const courses = [
//     {
//         id: 1,
//         name: 'Javascript',
//         coin: 60
//     },
//     {
//         id: 2,
//         name: 'jav',
//         coin: 50
//     },
//     {
//         id: 3,
//         name: 'PHP',
//         coin: 100
//     },
//     {
//         id: 4,
//         name: 'ReactJS',
//         coin: 60
//     },
// ]
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
// let numbers = [60,[50,[100]],60]
// let myArray = numbers.reduce(totalArray,[])
// function totalArray (total,value) {
  
//     return total.concat(value);
// }
// console.log(myArray);
let courses = [
    'Javascript',
    'PHP',
    'Ruby'
]
// Array.prototype.map2 = function (callback) {
//     let Arraylength = this.length;
//     let output = [] ;
//     for (let i=0 ; i<Arraylength ; i++){
//         let result = callback(this[i]);
//         output.push(result);
//     }
//     return output;
// }
// let htmls = courses.map2(function(course){
//     return `<h2>Khoa hoc ${course}</h2>`;

// })
// console.log(htmls);
// let html = courses.map2(function(course){
//     return `<h2>Khoa hoc ${course}</h2>`;
// })
// console.log(html);

const man1 = { name: "Sanji" }; // man 1 được lưu vào đia jchi #a001
const man2 = man1;// man 2 lấy giá trị của man1 với dc o nho khac #a002 với giá trị của man1
man1.name = 'zoro';// thya đổi giá trị của man1 nhung man2 dã coppy gia trị man1 
console.log(man2.name);// tao ra mot clone Object moi de khong làm thay khi object cu bị thay doi


