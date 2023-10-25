function mergedArray(arr1,arr2){
    //Step1 :merged the array 
    let newArray=[...arr1,...arr2];
  
    let uniqueElemen=[];

    for(let i=0;i<newArray.length;i++){


        if(uniqueElemen.indexOf(newArray[i])===-1){

            uniqueElemen.push(newArray[i]);
        }
    }
    return uniqueElemen;


}
console.log(mergedArray([10,20,30],[20,30 ,40,50]));