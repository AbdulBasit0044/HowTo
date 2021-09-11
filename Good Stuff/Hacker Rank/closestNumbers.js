// 'use strict';

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

// let inputString = '';
// let currentLine = 0;

// process.stdin.on('data', function(inputStdin) {
//     inputString += inputStdin;
// });

// process.stdin.on('end', function() {
//     inputString = inputString.split('\n');

//     main();
// });

// function readLine() {
//     return inputString[currentLine++];
// }


/*
 * Complete the 'closestNumbers' function below.
 *
 * The function accepts INTEGER_ARRAY numbers as parameter.
 */

function closestNumbers(numbers) {
    try{
        //flattening the array
        let tempNumbers = [...numbers];
        //Initializing the min with the max value possible
        let minDifference = Infinity;
        tempNumbers.sort((a, b) => (a-b));
        tempNumbers.reduce((act, cur) => {
            if (cur - act < minDifference) minDifference = cur - act;
            return cur;
        })
        console.log(tempNumbers);
        tempNumbers.reduce((act, cur) => {
            if ( cur - act === minDifference || act - cur === minDifference) 
            console.log(act, cur , minDifference)
            return cur;
    })
    console.log(minDifference);


    }catch(err){
        console.log(err);
    }
    
}
// function main() {
//     const numbersCount = parseInt(readLine().trim(), 10);

//     let numbers = [];

//     for (let i = 0; i < numbersCount; i++) {
//         const numbersItem = parseInt(readLine().trim(), 10);
//         numbers.push(numbersItem);
//     }

//     closestNumbers(numbers);
// }

let arr = [-9, -5, 9, 11, 13];
closestNumbers(arr);

