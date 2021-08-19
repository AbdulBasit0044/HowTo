let p = new Promise((resolve, reject) => {
    let a = 1+1;
    if(a===2){
        resolve('Success');
    }
    else{
        reject('Failed');
    }
});

p.then((data)=>{
    console.log("this is in then " + data);
}).catch((data)=>{
    console.log("This is in the catch " + data);
})