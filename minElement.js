function findMinElement(arr){

    let min=arr[0];

    for(let i=0;i<arr.length;i++){

        if(min>arr[i]){

            min=arr[i];
        }
    }
    return min;
}
console.log(findMinElement([6,9,5,4,10]));