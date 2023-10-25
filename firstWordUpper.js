function firstCharCapital(str)
{

        var allWords=str.split(' ').map((word)=>{

            return word.charAt(0).toUpperCase()+word.substring(1);
        });

       return  allWords.join(" ");

}
console.log(firstCharCapital("janjyoti multiple college"));