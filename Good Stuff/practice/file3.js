const obj = {
    x:1,
    // getX(){
    //     const inner = function(){
    //         console.log(this.x);//undefined
    //     }
    //     inner();
    // },
    getX(){
        const inner = () => {
            console.log(this.x);//1
        }
        inner();
    },
    // getX(){
    //     that = this;
    //     const inner = function(){
    //         console.log(that.x);//1
    //     }
    //     inner();
    // },
    // getX(){
    //     const inner = function(){
    //         console.log(this.x);//1
    //     }
    //     inner.call(this);
    // }
};

obj.getX();

let name = "Abdul Basit";
console.log(name);
console.log(obj);
let list = [1, 2, 4];
console.log(list);
//String.trim()
//String.toLowerCase()
//String.includes()
