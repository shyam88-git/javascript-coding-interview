function findSumArr(arr){
    let sum=0;
    
    arr.forEach((ele)=>{


        if(typeof ele==='number'){

            sum+=ele;


        }
    });
    return sum;



}
console.log(findSumArr(["Apple",123,"Banana" ,"Cherry",3,4,"Grapes",8]));