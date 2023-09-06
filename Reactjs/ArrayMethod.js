const myarr = ['A', 'B', 'C'];
const list = myarr.map((element) => {
    console.log(element);
})
// console.log(list);

//destructurning
const vachel = ['Abhishek', "Tiwari", "Rampur"];
const [val1, val2, val3] = vachel;
console.log(val1, val2, val3);

function calculate(a, b) {
    const plus = a + b;
    const minus = a - b;
    const guna = a * b;
    const bhag = a / b;
    return [plus, minus, guna, bhag];
}

const [plus, minus, guna, bhag] = calculate(45, 6);
console.log(plus, minus, guna, bhag);

//
const vechile = {
    name: "Maruti",
    year: 2023,
    color: "red"
}
myvechile(vechile);

function myvechile({ name, year }) {
    console.log(name, year);
}


//
const num1 = [1, 2, 3]
const num2 = [4, 5, 6];
console.log(...num1, ...num2);
const num3 = [...num1, ...num2];
console.log(num3);

const num4 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [a, b, ...c] = num4;
console.log(a, b, c);