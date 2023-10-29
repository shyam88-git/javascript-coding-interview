function findMissingElement(arr){
    let missingElement=[];

    let minElement=Math.min(...arr);
   
    let maxElement=Math.max(...arr);

    for(let i=minElement;i<maxElement;i++){

        if(missingElement.indexOf(i)<0){


            missingElement.push(i);

            


        }
    }
  return missingElement;


}
console.log(findMissingElement([1,2,4,6,8,10]));