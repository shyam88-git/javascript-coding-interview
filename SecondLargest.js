function findSecondLargest(arr){

    let secondLargset=Math.max(...arr.filter((num)=>num!==Math.max(...arr)));

    return secondLargset;
    


}
console.log(findSecondLargest([10,20,60,30,50,80]));