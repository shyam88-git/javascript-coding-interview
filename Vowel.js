function findVowel(words){

    let vowels=["a","e","i","o","u"];
    let count=0;

    for(let word of words){

        if(vowels.includes(word)){

            count++;
        }
    }
    return count;




}
console.log(findVowel("Hello Janjyoti College"));