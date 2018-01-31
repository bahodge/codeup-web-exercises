//
// var userNum = parseInt(prompt("Enter an odd # between 1 and 50"));
//
// if (userNum > 50 || userNum < 1){
//     userNum = parseInt(prompt("1 and 50 you knob!"));
//
// } else {
//     for (var i = 1; i < 50; i++) {
//
//         //If the number is even, go to next iteration
//         if (i % 2 === 0) {
//             continue;
//         }
//         //If number matches user number
//         if (i === userNum){
//             console.log(i + " is the same as userNum: Skipping");
//             i += 2;
//         }
//
//         console.log('i is: ' + i);
//     }
//
// }
//


var input = prompt ("Please input a number between 1 and 50");

do {

    input = prompt("Please input a number between 1 and 50");

} while (input > 50 || input < 1 || isNaN(parseFloat(input)));

console.log("Number to skip is " + input);

for (var i = 1; i <= 50; i++){
    if (i % 2 == 0){
        continue;
    }
    if (i == input){
        console.log("Skipping " + input);
        continue;
    }
    console.log("Here is an odd number " + i);

}