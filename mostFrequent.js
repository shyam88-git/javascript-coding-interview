function freq(arr){

    let freq={};

    arr.forEach((ele)=>{

            if(freq.hasOwnProperty(ele)) freq[ele]++;
            else
                freq[ele]=1;
    });

    var ans=Object.keys(freq).reduce((acc,num)=>{

         return freq[acc]>freq[num] ?acc :num
    })
    console.log(ans);

}
freq([1,2,3,,4,4,3,3,3,5,6]);