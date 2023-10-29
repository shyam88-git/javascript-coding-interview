function addMul(arr){
    let num=arr.map((n)=>n*10).map((n)=>n+2);
    return num;


}
console.log(addMul([10,20,30,40,50,60]));