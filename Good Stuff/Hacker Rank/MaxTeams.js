'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/**
 * This function will return the factorial of the number passed
 * 
 * @param number
 * return number
 */
const calcFactorial = function (number){
    if(number < 0) return;
    if(number < 2) return 1;
    return number * calcFactorial(number -1);
}
/*
 * Complete the 'countTeams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY skills
 *  2. INTEGER minPlayers
 *  3. INTEGER minLevel
 *  4. INTEGER maxLevel
 */

function countTeams(skills, minPlayers, minLevel, maxLevel) {
    //filtering all the players with valid skills like in the sample
    let playersLeft = skills.filter((skill) => skill <= maxLevel && skill >= minLevel).length;
    //edge case for having less players than required
    if(playersLeft < minPlayers) return 0;
    //edge case for having equal number of players required
    if (playersLeft === minPlayers) return 1;
    let totalTeams = 1;
    while(minPlayers < playersLeft){
        //Applying Combination Formula nCr = n!/r!(n-r)!
        totalTeams += calcFactorial(playersLeft) / (calcFactorial(minPlayers) *     calcFactorial(playersLeft - minPlayers));
        minPlayers++;
    }
    return totalTeams;
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const skillsCount = parseInt(readLine().trim(), 10);

    let skills = [];

    for (let i = 0; i < skillsCount; i++) {
        const skillsItem = parseInt(readLine().trim(), 10);
        skills.push(skillsItem);
    }

    const minPlayers = parseInt(readLine().trim(), 10);

    const minLevel = parseInt(readLine().trim(), 10);

    const maxLevel = parseInt(readLine().trim(), 10);

    const result = countTeams(skills, minPlayers, minLevel, maxLevel);

    ws.write(result + '\n');

    ws.end();
}
