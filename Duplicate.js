function removeDuplicate(arr){

    let uniqueElement=[];

    for(let i=0;i<arr.length;i++){

        if(uniqueElement.indexOf(arr[i])===-1){

            uniqueElement.push(arr[i]);
        }

    }
    return uniqueElement;


}
console.log(removeDuplicate([2,3,4,5,6,8,9,10,2,3,3,4]));