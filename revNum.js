function revNumber(number){

    let num=Number(number.toString().split('').reverse().join(''));
    return num;


}
console.log(revNumber(56693));