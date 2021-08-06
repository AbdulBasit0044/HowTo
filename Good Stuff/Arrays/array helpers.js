let colors = ["red", "blue", "green", "purple", "yellow", "brown"];

console.log(colors);

// let result = colors.forEach(element => {
//     // console.log("element is => ",element);
// });

// console.log(result);

// With named function
// colors.forEach(someFunc);

// Will print out colors rendered with background colors on browser console
// function someFunc(a) {
//     console.log(`%c${a}`, `background-color:${a};color:white`);
// }


// Map Helper
var colorsCapitalized = colors.map((color) => (color[0].toUpperCase() + color.slice(1)));

console.log(colorsCapitalized);
console.log(colors);

console.log("this is more than what i expected");

