function alphabetOrder(str){

    return str.toLowerCase().split('').sort().join('');



}
console.log(alphabetOrder("Apple"));
console.log(alphabetOrder("Mango"));
console.log(alphabetOrder("Grapes"));