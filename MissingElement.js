function findMissingElement(arr){

    let minElement=Math.min(...arr);
    let maxElement=Math.max(...arr);
    let missingArray=[];

    for(let i=minElement;i<maxElement;i++){

        if(arr.indexOf(i)<0){

            missingArray.push(i);


        }
    }
    return missingArray;
}

console.log(findMissingElement([1,2,4,6]));