
"use strict";




ShowColor("orange");

var number = prompt("Choose a number");

IsPrime(number);







////////////////////////////////////////////////////////

function ShowColor (color) {
       console.log("Look at my " + color + " " + "car!");
}

//Determines PRIMENESS of a whole number
function IsPrime (num){
    for (var i = 2; i <= (num/2); ++i){
        if (num % i != 0) {
            console.log(num + " IS a prime number")
        } else {
            console.log(num + " is NOT a prime number")
        }
    }
}




