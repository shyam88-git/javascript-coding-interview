let arr=[
    {name:'Shyam',gender:"male"},
    {name:"Harish" , gender:"male"},
    {name:"Ritu" , gender:"female"},
    {name:"Rasmita",gender:"female"},
    {name:"Harishaka" ,gender :"other"}

]

//simple step

let newArr=arr.filter((ele)=>{

    return ele.gender==='male';
});

console.log(newArr);