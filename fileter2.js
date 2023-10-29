

let arr=[
    {title:"Book1" , genre:"History" ,publish :1999 , edition:2009 },
    {title:"Book2" , genre:"Fiction" ,publish :1996 , edition:2018 },
    {title:"Book3" , genre:"Non-Fiction" ,publish :1990 , edition:2020 },
    {title:"Book4" , genre:"Science" ,publish :2012 , edition:2022 },
    {title:"Book5" , genre:"History" ,publish :2014 , edition:2024 },
    {title:"Book6" , genre:"Fiction" ,publish :2005, edition:2009 },
    {title:"Book7" , genre:"Science" ,publish :1999 , edition:2005 },
    {title:"Book8" , genre:"History" ,publish :2002 , edition:2023 },
]

// let userBooks=arr.filter((bk)=>bk.genre==='History');

let userBooks=arr.filter((bk)=>{return bk.publish>=2000 && bk.genre==="History"});
console.log(userBooks);