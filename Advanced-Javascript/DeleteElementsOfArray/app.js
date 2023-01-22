let btn = document.getElementById("btn");
let results = document.getElementById("result");
let givenArr = [12, 45, 88, 1, 567, 3, 91,"test","test1"]

btn.addEventListener("click", function() {
    results.innerHTML += `The Result before deleting strings: ${givenArr} <br>`
    for (let i = 0; i < givenArr.length; i++) {
        if (isNaN(givenArr[i])) {
            givenArr.splice(i, 1);
            i--;
        }
    }
    results.innerHTML += `The Result after deleting strings: ${givenArr}`
});