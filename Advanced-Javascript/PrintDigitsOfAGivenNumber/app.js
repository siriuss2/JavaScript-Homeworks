let btn = document.getElementById("btn");
let h2Results = document.getElementById("results");

btn.addEventListener("click",function(){
    let num = parseInt(prompt("Please enter a number:"));
    if (isNaN(num)) {
        alert("Please enter a valid number.");
        let num = parseInt(prompt("Please enter a number:"));
        let numArray = num.toString().split('');
        h2Results.innerHTML = `${numArray}`
    } else {
        let numArray = num.toString().split('');
        h2Results.innerHTML = `${numArray}`
    }
    
})