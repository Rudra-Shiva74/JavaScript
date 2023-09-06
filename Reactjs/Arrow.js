// Abhi = function (num) {
//     return num;
// }
// console.log(Abhi(45));

// hello = val => "Abhishek"+val;
// console.log(hello("Hello"));

class Header {
    constructor() {
        this.color = "red";
    }
    changecolor = () => {
        console.log(this);
    }
}

const header = new Header();
console.log(header.changecolor());