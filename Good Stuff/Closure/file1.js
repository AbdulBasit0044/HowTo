function outerFunction(a) {
    let name = "Hi";
    return function innerFunction(b){
        console.log(a);
        console.log(b);
        console.log(name);
    }
}

const newFunctionA = new outerFunction('outside');
newFunctionA('inner');


// const outerFunction = (a)=> {
//     let name = "Hi";
//     return (b)=>{
//         console.log(a);
//         console.log(b);
//         console.log(name);
//     }
// }

// const newFunctionA = outerFunction('outside');
// newFunctionA('inner');