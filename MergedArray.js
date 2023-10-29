function mergedArray(arr1,arr2){

    let  newArr=[...arr1,...arr2];

    
    let arr=newArr.filter((ele,index)=>{


        return newArr.indexOf(ele)===index

    });
    return arr;
   


}
console.log(mergedArray([10,20,30,40],[30,40,50,60,70]));