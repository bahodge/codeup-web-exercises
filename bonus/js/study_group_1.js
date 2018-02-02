"use strict";

// BONUS 1:
// Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
// Using multiple functions will be helpful.
//     input = 5552324343, output = 555-232-4343
// input = 5553434, output = 555-3434
// input = 18005552323, output = 1-800-555-2323
//
// Extra Challenge: account for invalid characters
// Extra Challenge: if the input is already formatted, output the unformatted version
// Extra Challenge: allow the parser to accept letters and convert them to the correct numbers


function parser(string) {
    var phoneArray = [];
    if (typeof(parseInt(string)) === 'number' && isFinite(string)){
        string = string.toString();
        if (string.length === 7){
            phoneArray = string.split("");
            phoneArray.splice(3, 0, "-");
            phoneArray = phoneArray.join("");
        } else if (string.length === 10){
            phoneArray = string.split("");
            phoneArray.splice(3, 0, "-");
            phoneArray.splice(7, 0, "-");
            phoneArray = phoneArray.join("");
        } else if (string.length === 11){
            phoneArray = string.split("");
            phoneArray.splice(1, 0, "-");
            phoneArray.splice(5, 0, "-");
            phoneArray.splice(9, 0, "-");
            phoneArray = phoneArray.join("");
        } else {
            return false;
        }
        return phoneArray;
    }
}