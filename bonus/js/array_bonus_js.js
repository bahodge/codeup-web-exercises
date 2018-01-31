(function (){


    var someNumbers = [1, 2, 3, 4, 5];

//Average numbers

    function average(array){
        var sum = 0;
        for (var i = 0; i < array.length; i++){
            sum += array[i];
        }

        var avg = (sum/array.length);
        console.log("Average of array is " + avg);
        return avg;
    }

    average(someNumbers);

//Sum all numbers

    function sumAll(array){
        var sum = 0;
        for (var i = 0; i < array.length; i++){
            sum += array[i];
        }
        console.log("Sum of array is " + sum);
        return sum;
    }

    sumAll(someNumbers);

//Biggest Number

    function biggestNumber (array){
        var bigNumber = 0;
        for (var i = 0; i < array.length; i++){
            if (array[i] >= bigNumber){
                bigNumber = array[i];
            }
        }
        console.log("Biggest Number in array is " + bigNumber);
        return bigNumber;
    }

    biggestNumber(someNumbers);

//Smallest Number

    function smallestNumber (array){
        var smallNumber = biggestNumber(array);
        for (var i = 0; i < array.length; i++){
            if (array[i] <= smallNumber){
                smallNumber = array[i];
            }
        }
        console.log("Smallest number in array is " + smallNumber);
        return smallNumber;
    }

    smallestNumber(someNumbers);

//Reverse the Array

    function reverseArray(array){

        console.log(array.reverse());
        return array.reverse();
    }

    reverseArray(someNumbers)



})();


