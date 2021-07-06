'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    return inputString[currentLine++];
}

// function getLetter(s) {
//     let letter;
//     let A = ['a', 'e', 'i', 'o', 'u'];
//     let B = ['b', 'c', 'd', 'f' , 'g'];
//     let C = ['h', 'j', 'k', 'l' , 'm'];
//     let D = ['n', 'p', 'q', 'r' , 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
//     switch(true){
//         case A.includes(s[0]):
//         letter = 'A';
//         break;
//         case B.includes(s[0]):
//         letter = 'B';
//         break;
//         case C.includes(s[0]):
//         letter = 'C';
//         break;
//         case D.includes(s[0]):
//         letter = 'D';
//         break;
//     }
    
//     return letter;
// }

const getLetter = s => s.match(/^[aeiou]/) ? 'A' : 
        s.match(/^[bcdfg]/) ? 'B' : 
        s.match(/^[hjklm]/) ? 'C' : 'D';

function main() {
    const s = readLine();
    
    console.log(getLetter(s));
}