//---HomeWork 1---
function user(obj) {
    let  myKeys = Object.keys(obj);
    let myValues = Object.values(obj);
    for (let x in myKeys) {
        console.log(myKeys[x]);
    }
    for (let y in myValues) {
         if (typeof myValues[y] === "object" && 
         Array.isArray(myValues[y]) === false ){
             user(myValues[y]); 
            }
    }
 }
    let person = {
        name: "hai",
        age: 48,
        appearence: {
            haircolor: "green",
            eyesColor: {
                sayHi: "1",
                sayTow: "2",
                world: "bye",
            },
            heigth: 1.70, // unit: meter
            weight: 70, //unit: kilogram
        },
        fullName: function () {
            return `${this.name} ${this.age}`
        },
        logo: [10,30,75],
    }
         user(person);

//------HomeWork 2------
// input([21,4,5,-1],3,99)
//output (21,4,5,99,-1)

function insertArray (arr,ind,val) {
    arr.splice(ind,0,val);
    console.log(arr);
 }
insertArray([21,4,5,-1],3,99);




