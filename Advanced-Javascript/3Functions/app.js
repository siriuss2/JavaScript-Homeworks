// ## Exercise 1

// Make 3 functions:
// 1. Function that takes a number through a parameter and returns how many digits that number has
// 2. Function that takes a number through a parameter and returns if its even or odd
// 3. Function that takes a number through a parameter and returns if its positive or negative

// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console. 
// #### Ex: 
// **Code:** getNumberStats(-25);
// **Console:** 2 Digits, Odd, Negative

function getDigits(number){
    if(number < 0){
        console.log( number.toString().length - 1);
    } else{
    console.log( number.toString().length);
    }
}

// console.log(getDigits(234));
// console.log(getDigits(-6754));

function evenOdd(number){
    let input = parseInt(number);
    if(input%2===0){
        console.log("The number is even");
    } else{
        console.log("The number is odd");
    }
}

// evenOdd(5);


function positiveNegavite(number){
    if(number > 0){
        console.log("Number is positive");
    } else{
        console.log("Number is negative");
    }

}

// positiveNegavite(4);


function allFunctions(number){
    getDigits(number);
    evenOdd(number);
    positiveNegavite(number);
}

allFunctions(-25);
