console.log("Ajax in one video");

document.getElementById("FetchBtn").addEventListener("click", () => {
    console.log("Your are click on fetchBtn");
    const xhr = new XMLHttpRequest();

    //this is get method
    // xhr.open("GET", "https://jsonplaceholder.typicode.com/todos/1", true);

    //this is post method
    xhr.open("POST", "", true);
    xhr.onprogress = () => {
        console.log("On Progress..");
    }
    xhr.onreadystatechange = () => {
        console.log(xhr.readyState);
    }
    xhr.onload = function () {
        document.getElementById("demo").innerText = this.responseText;
        console.log("On Load..");
        console.log(this.responseText);
    }
    xhr.send();
    console.log("We are done...");
}); document.getElementById("BackupBtn").addEventListener("click", () => {
    console.log("Click on BackupBtn..");
    const xhr = new XMLHttpRequest();
})
