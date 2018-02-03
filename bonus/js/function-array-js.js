(function () {


"use strict";


var numbers = [150, 652, 345, 4129, 2275, 136, 577, 48, 97852, 1210];
var smallNumbers = [1 ,2 ,3];
var strings = ['apple', 'papaya', 'banana', 'orange', 'pineapple', 'dragon fruit' ];

// 1. Write a function called average(numbers) that takes in an array of numbers and returns the average

function average(array){
    var total = 0;

    //Cycle through the array from the beginning to the end
    for (var i = 0; i < array.length; i++){
        //check if index is a number
        if (!isNaN(array[i])){
            //add the element to the total
            total += array[i];
        } else {
            //logs an alert
            console.log("Hey man, \'" + array[i] + "\' isn't a number!");
            //skips the index in question.
            i++;
        }
    }
    //return the average
    return total / array.length;
}


// 2. Write a function called sumAll(numbers) that takes in an array of numbers and returns the sum of adding all of them.

function sumAll(array){
    var total = 0;
    //Cycle through the array from the beginning to the end
    for (var i = 0; i < array.length; i++){
        //check if index is a number
        if (!isNaN(array[i])){
            //add the element to the total
            total += array[i];
        } else {
            //logs an alert
            console.log("Hey man, \'" + array[i] + "\' isn't a number!");
            //skips the index in question.
            i++;
        }
    }
    //return the total
    return total;
}


// 3. Write a function called max(numbers) that takes in an array of numbers and returns the largest

function max(array){

    var largestNumber = array[0];

    //number is >= to current LargestNumber, then thatnumber is the largest. Otherwise, try the next number.
    for(var i = 0; i < array.length; i++){
        if (!isNaN(array[i])){
            if (array[i] >= largestNumber){
                largestNumber = array[i];
            }
        } else {
            //logs an alert
            console.log("Hey man, \'" + array[i] + "\' isn't a number!");
            //skips the index in question.
            i++;
        }
    }
    return largestNumber;
}


// 4. Write a function called min(numbers) that takes in an array of numbers and returns the smallest

function min(array){
    //sets the first number to the first element just as a reference point.
    var smallestNumber = array[0];

    //number is >= to current LargestNumber, then that number is the largest. Otherwise, try the next number.
    for(var i = 0; i < array.length; i++){
        //checks if number
        if (!isNaN(array[i])){
            if (array[i] <= smallestNumber){
                //sets smallest number
                smallestNumber = array[i];
            }
        } else {
            //logs an alert
            console.log("Hey man, \'" + array[i] + "\' isn't a number!");
            //skips the index in question.
            i++;
        }
    }
    return smallestNumber;
}

// 5. Write a function called reverseArray(array) that takes in an array and returns the elements in reverse order

function reverseArray(array){
    //Empty Array to store the new array
    var reversed = [];
    for (var i = array.length - 1; i >= 0; i--){
        reversed.push(array[i]);
    }
    return reversed;
}

// 6. Write a function called randomElement(array) that takes in an array and returns a random element
function randomElement(array){
    //Creates a random number
    var randomNumber = Math.floor(Math.random() * array.length);
    return array[randomNumber];
}

// 7. Write a function called upperCaseAll(array) that takes in an array of strings and returns an array of uppercased strings.

function upperCaseAll (array){
    var casedArray = []
    for (var i = 0; i < array.length; i++){
       casedArray.push(array[i].toUpperCase());
    }
    return casedArray;
}


// 8. Write a function called getOdds(array) that returns an array of only the odd numbers from an array of numbers.

function getOdds(array){
    var oddArray = [];
    array.forEach(function (element) {
        if (element % 2 != 0){
            oddArray.push(element);
        }
    });
    return oddArray;
}

// 9. Write a function called getEvens(array) that returns only the even numbers from an array of numbers

function getEvens(array){
    var evenArray = [];
    array.forEach(function (element) {
        if (element % 2 == 0){
            evenArray.push(element);
        }
    });
    return evenArray;
}

// 10. Write a function called multiplyAll(array) that takes in an array of numbers and returns the result of multiplying all the numbers

function multiplyAll(array) {
    var total = array[0];
    //Cycle through the array from the beginning to the end
    for (var i = 0; i < array.length; i++){
        //check if index is a number
        if (!isNaN(array[i])){
            //add the element to the total
            total *= array[i];
        } else {
            //logs an alert
            console.log("Hey man, \'" + array[i] + "\' isn't a number!");
            //skips the index in question.
            i++;
        }
    }
    //return the total
    return total;
}


})();