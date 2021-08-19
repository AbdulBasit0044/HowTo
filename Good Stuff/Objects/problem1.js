'use strict';

// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin.resume(),
//   output: process.stdout
// });

// rl.question('What do you think of Node.js? ', (answer) => {
//   // TODO: Log the answer in a database
//   console.log(`Thank you for your valuable feedback: ${answer}`);

//   rl.close();
// });

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;
console.log("in the file");
process.stdin.on('data', inputStdin => {
    console.log("about to get string");
    inputString += inputStdin;
});

process.on('SIGINT', () => {
    console.log("end triggered");
    inputString = inputString.trim().split('\n').map(string => {
        return string.trim();
    });
    
    main();    
});

function readLine() {
    console.log(" in readline function");
    return inputString[currentLine++];
}

/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 * 
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
// function getCount(objects) {
//     return objects.reduce((acc, curr) =>{
//         if(curr.x === curr.y) return ++acc;
//         else return acc;
//     }, 0);
// }


function main() {
    console.log("in main");
    // const n = +(readLine());
    // let objects = [];
    
    // for (let i = 0; i < n; i++) {
    //     const [a, b] = readLine().split(' ');
        
    //     objects.push({x: +(a), y: +(b)});
    // }

    // console.log(getCount(objects));
}