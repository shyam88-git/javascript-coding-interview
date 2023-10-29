function isPalindrom(str){

    //remove space
    let cleanStr=str.replace(/\s/g,"").toLowerCase();

    let revStr=cleanStr.split('').reverse().join('');
    return cleanStr==revStr;

}
 console.log(isPalindrom("racecar"));
console.log(isPalindrom("shyamsharki"));