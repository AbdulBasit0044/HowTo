let a =[1,3,8,5,8,3,4,8]

let b = [];
const length = a.length;

// for(let i =0; i< length; i++){
//     if(b.indexOf(a[i]) === -1){
//         b.push(a[i]);
//     }
// }
// console.log(b);////[ 1, 3, 8, 5, 4 ]

// a.sort();
// let _temp;
// for(let i =0; i< length; i++){
//     if(a[i] !== _temp){
//         b.push(a[i]);
//         _temp = a[i];
//     }
// }
// console.log(b);////[ 1, 3, 4, 5, 8 ]

// let obj = {};
// for(let i of a){
//     obj[i] = true;
// }

// b = Object.keys(obj);
// console.log(b);////[ '1', '3', '4', '5', '8' ]

let bSet = [... new Set(a)];
console.log(bSet);////[ 1, 3, 8, 5, 4 ]