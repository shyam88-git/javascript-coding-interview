const arr1 = [2, 5, 8, 3, 6];
const arr2 = [8, 7, 3, 5, 2];


  if (arr1.length !== arr2.length) {
    return false;
  }

  let arr=arr1.every((currElement)=>{

     if(arr2.indexOf(currElement)>-1){

        return (currElement=arr2[arr2.indexOf(currElement)]);
     }
  })

console.log(arr);
