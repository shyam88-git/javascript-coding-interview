function findMax(arr){

    let max=arr[0];

    for(let i=0;i<arr.length;i++){

        if(max<arr[i]){

            max=arr[i];
        }
    }
    return max;


}

console.log(findMax([2,1,3,5,8,19,28,22,24]));