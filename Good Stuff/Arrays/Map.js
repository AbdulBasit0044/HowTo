const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];




//***MAP***
//1. Get array of all names
const allNames = characters.map((character)=>{
    return character.name;
});
console.log(allNames);////[ 'Luke Skywalker', 'Darth Vader', 'Leia Organa', 'Anakin Skywalker' ]

//2. Get array of all heights
const allHeights = characters.map((character)=>character.height);
console.log(allHeights);
////[ 172, 202, 150, 188 ]

//3. Get array of objects with just name and height properties
const minifiedRecords = characters.map((character)=>{
    return {
        name: character.name,
        height: character.height
    }
});
console.log(minifiedRecords);
/*[
  { name: 'Luke Skywalker', height: 172 },
  { name: 'Darth Vader', height: 202 },
  { name: 'Leia Organa', height: 150 },
  { name: 'Anakin Skywalker', height: 188 }
]
*/

//4. Get array of all first names
const allFirstNames = characters.map((character)=> character.name.split(" "));
console.log("all first names are",allFirstNames);
/*with only splitting
[
  [ 'Luke', 'Skywalker' ],
  [ 'Darth', 'Vader' ],
  [ 'Leia', 'Organa' ],
  [ 'Anakin', 'Skywalker' ]
]
*/
////splitting and selecting [0]
////[ 'Luke', 'Darth', 'Leia', 'Anakin' ]




//***REDUCE***
//1. Get total mass of all characters
const totalMass = characters.reduce((acc, cur) => {
    return acc + eval(cur.mass);
}, 0);
console.log(totalMass);////346

//2. Get total height of all characters
const totalHeight = characters.reduce((acc, cur) => acc + eval(cur.height), 0);
console.log(totalHeight);////712

//3. Get total number of characters by eye color
const getCharactersByEyeColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if(acc[color]){
        acc[color]++;
    } 
    else{
        acc[color] = 1;
    }
    return acc;
}, {});
console.log(getCharactersByEyeColor);////{ blue: 2, yellow: 1, brown: 1 }

//4. Get total number of characters in all the character names
const totalNumberOfCharacters = characters.reduce((acc, cur)=>{
    return acc + cur.name.length;
}, 0);
console.log(totalNumberOfCharacters);////52




//***FILTER***
//1. Get characters with mass greater than 100
const massGreater = characters.filter((element)=>element.mass >100);
console.log(massGreater);
/*[
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male'
  }
]
*/

//2. Get characters with height less than 200
const heightShorter = characters.filter((element) => element.height < 200);
console.log(heightShorter);
/*
 [
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male'
  },
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female'
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male'
  }
] 
 */

//3. Get all male characters
const allMaleCharacters = characters.filter((element) => element.gender === 'male');
console.log(allMaleCharacters);
/*
[
  {
    name: 'Luke Skywalker',
    height: 172,
    mass: 77,
    eye_color: 'blue',
    gender: 'male'
  },
  {
    name: 'Darth Vader',
    height: 202,
    mass: 136,
    eye_color: 'yellow',
    gender: 'male'
  },
  {
    name: 'Anakin Skywalker',
    height: 188,
    mass: 84,
    eye_color: 'blue',
    gender: 'male'
  }
]
 */

//4. Get all female characters
const allFemaleCharacters = characters.filter((element) => element.gender === 'female');
console.log(allFemaleCharacters);
/*
[
  {
    name: 'Leia Organa',
    height: 150,
    mass: 49,
    eye_color: 'brown',
    gender: 'female'
  }
]
 */




//***SORT***
//1. Sort by mass
const byMass = characters.sort((a, b)=>{
    return a.mass-b.mass;
});
console.log(byMass);
//2. Sort by height
const byHeight = characters.sort((a, b) => a.height - b.height);
console.log(byHeight);
//3. Sort by name
const byName = characters.sort((a, b)=>{
    if(a.name < b.name) return -1;
    return 1;
});
console.log(byName);

//4. Sort by gender
const byGender = characters.sort((a, b) => {
    if( a.gender === 'female') return -1;
    return 1;
});
console.log(byGender);




//***EVERY***
//1. Does every character have blue eyes?
//2. Does every character have mass more than 40?
//3. Is every character shorter than 200?
//4. Is every character male?

//***SOME***
//1. Is there at least one male character?
//2. Is there at least one character with blue eyes?
//3. Is there at least one character taller than 210?
//4. Is there at least one character that has mass less than 50?