const arr = [1, 2, 3, 4];

const returnMinMax = (arr)=>{
    const totalSum = arr.reduce((a, b) => a+b, 0);
    const sum = arr.map((element)=>{
        return totalSum-element;
    });
    return {minSum: Math.min.apply(null, sum), maxSum: Math.max.apply(null, sum)}
};

let result = returnMinMax(arr);
console.log(result);
