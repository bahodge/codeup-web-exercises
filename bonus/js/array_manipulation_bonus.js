// ================================= ARRAY MANIPULATION
//
// BONUS 1:
//
// Create a phone number parser that will convert a string of numbers into a human readable format. The output should depend on the number of digits (account for 7, 10, 11 digit numbers):
//
// Using multiple functions will be helpful.
//
// input = 5552324343, output = 555-232-4343
// input = 5553434, output = 555-3434
// input = 18005552323, output = 1-800-555-2323
//
// Extra Challenge: account for invalid characters
// Extra Challenge: if the input is already formatted, output the unformatted version
// Extra Challenge: allow the parser to accept letters and convert them to the correct numbers

    function isNumeric (input) {
        if (typeof(parseInt(input)) === "number"){
            return true;
        }
        return false;
    }

    function isSingleNumber() {

    }

    console.log (isNumeric("12"));



//
// BONUS 2:
//
// Create a student roster management app. Using the user dialogue functions (alert, confirm, prompt), create an application that will prompt the user to choose from a menu with the following actions:
//     1) Add a student name
// 2) Delete a student name
// 3) View all student names in alphabetical order
// 4) View all student names in reverse alphabetical order
// Store the student names in an array. Account for invalid user input.