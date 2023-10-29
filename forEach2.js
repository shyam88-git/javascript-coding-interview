function greater(arr){

    let newNums=[];

    arr.forEach((num)=>{

        if(num>10){

            newNums.push(num);
        }
    });
    return newNums;

   

}
console.log(greater([2,4,5,8,9,10,12,54]));