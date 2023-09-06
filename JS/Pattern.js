let str = "";
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < i; j++) {
        str += "* ";
    }
    str += "<br>";
}
console.log(str)
document.getElementById("demo").innerHTML = str;