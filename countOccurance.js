function coutOccurance(str){
    let occurance={};

    str.split('').forEach((ele)=>{

        if(occurance.hasOwnProperty(ele)===false){


            occurance[ele]=1;
        }
        else{

            occurance[ele]++;
        }


    });
    return occurance;



}
console.log(coutOccurance("Apple"));