function sumArray(arr){

    let sum=arr.reduce((accum,currElement)=>{

        return accum+=currElement;
    });
    
    return sum;


}
console.log(sumArray([10,20,30,40,50]));