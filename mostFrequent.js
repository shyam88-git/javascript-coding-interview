function freq(arr){

    let freq={};

    arr.forEach((ele)=>{

        if(freq.hasOwnProperty(ele)) 
         freq[ele]++;
        else    
            freq[ele]=1;
    });
   
    let ans=Object.keys(freq).reduce((acc,num)=>{
        return freq[acc]>freq[num]?acc: num
    });
    console.log(ans);
}
freq([1,2,3,4,2,2,3,3,3,3,5,6,8]);