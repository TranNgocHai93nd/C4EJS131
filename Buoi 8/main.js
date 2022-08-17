// HOC IF
// let x=10;
// if (x>0) {
//     console.log("x la so duong");
// }else{
//     if (x==0){
//         console.log("x bang khong")
//     }else{
//         console.log("x la so am");
//     }
// }
// console.log("FINISH")
// VONG LAP FOR
// let n=3;
// for (let i=1; i<=n; i++){
//     console.log(i)
// }
// Do while
// for (let i=1; i<10; i++){
//     if (i%3==0){
//         console.log(i);
//     }






// HOME WORK LESSON 8

let sao="";
let sao1="";
let khoang1="                        ";
let khoang2="              ";
for(let i=1;i<5;i++) {
    console.log("*"+sao+khoang1+sao1+"*"+sao+khoang2+"*"+sao+"\n");
    khoang1=khoang1.slice(0,-4);
    khoang2=khoang2.slice(0,-2);
    sao=sao+" *";
    sao1=sao1+"* ";
}
