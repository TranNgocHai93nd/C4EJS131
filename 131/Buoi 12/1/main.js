// HomeWork 1
// Input: 1 mảng các phần tử là các mảng lồng trong mảng
// Output: 1 mảng đã được sắp xếp gòm các phần tử chỉ là số

let myArr=[1,20,[12,4,[5], [6,[7]]],[[[10,9]]]];



function Add(arr,result = [] ) {
    const myArr = result;
    for (let i=0 ;i<= arr.length-1 ; i++){
        if (Array.isArray(arr[i]) !== true){
            myArr.push(arr[i]);
        }else{
            Add(arr[i],result);
        }
    }
    return result.sort((a,b) => a-b);  
}
console.log(Add(myArr));


