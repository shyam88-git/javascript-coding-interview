function findLongestWord(str){

    let words=str.split(' ');
    let longestWord='';

    for(let word of words){

        if(word.length>longestWord.length){

            longestWord=word;
        }
    }
   return longestWord;


}
console.log(findLongestWord("I Love Programming"));