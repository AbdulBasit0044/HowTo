const a = [1, 2, 5, 7, 9];
const b = [2, 5, 7, 12, 100];

const c = a.concat(b).sort((a, b)=>a-b);

console.log(c);