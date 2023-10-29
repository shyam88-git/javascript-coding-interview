function findDuplicate(arr){

    let duplicateElement=arr.filter((ele,index)=>{

         return arr.indexOf(ele)!==index;
    });
    return duplicateElement;


}
console.log(findDuplicate([2,4,5,8,9,10,2,4,5,]));