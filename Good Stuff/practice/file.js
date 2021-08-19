let x = 'hi this is amazing';
let y = 'ih';

const reverseX = (x) => x.split('').reverse().join('');////ih


console.log(x);
console.log(reverseX(x));
console.log(reverseX(x) === y);////true

function reverseString(s){
    return [...s].reverse().join("");
}
const obj = {
    a:1,
    b:2,
    getA(){
        console.log(this.a);
        return this;
    },
    getB(){
        console.log(this.b);
    }
}

obj.getA().getB();