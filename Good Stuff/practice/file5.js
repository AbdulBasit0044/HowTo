let x = 1234;

const findNumberLength = (number)=>{
    let numberLength = 0;
    while(number != 0){
        number = Math.trunc(number / 10);
        numberLength++;
    }
    return numberLength;
}

console.log(findNumberLength(x));