"use strict";

// ================================= LOOPS BONUSES
// BONUSES 1:
// Write a function to toggle all characters in a string: in a given string, toggle all characters to their opposite case. Special characters will not change.
//     Example input: "aBc12#"
// Example output: "AbC12#"



// BONUS 2:
// Write a function that takes a given string appended with a number at the end. The program will check the length of the string to verify the string is equal to the number appended. If the number appended equals the string length, output "Yes". if the number appended does not equal the string length, output "No".
//     Example Input: "geek5"
// Example Output: "Yes"
// Example Input: "codingchallenge25"
// Example Output: "No"

// ================================= LOOPS BONUSES


//Bottles of beer on the wall song.

function Bottles(){
    for (var i = 99; i >= 1; i--){
        if (i === 1){
            console.log (i + " bottle of beer on the wall, " + i + " bottle of beer. Take it down, pass it around and there are no bottles of beer on the wall!");
        } else {
            console.log(i + " bottles of beer on the wall, " + i + " bottles of beer. Take one down, pass it around " + (i-1) + " bottles of beer on the wall");
        }
    }
}

//FizzBuzz
function FizzBuzz (){
    for (var i = 1; i <= 100; i++){
        if ((i % 3 === 0) && (i % 5 === 0)){
            console.log("FizzBuzz");
        } else if (i % 3 === 0){
            console.log("fizz");
        } else if (i % 5 === 0){
            console.log("fizz");
        } else {
            console.log(i);
        }
    }
}


function PrimeUnderThousand(){
    var isPrime;

    for (var curNum = 0; curNum <= 1000; curNum++){
        for (var i = 2; i < curNum; i++)
            if (curNum % i === 0 && curNum !== i) {
                isPrime = true;
                console.log ("Current number|| " + curNum + " is prime" + isPrime);
            } else {
                isPrime = false;
            }
    }
}