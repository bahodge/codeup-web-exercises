'use strict';

function BreakContinue(highestNumber){
    var userNum = prompt ("Enter an odd number between 1 & " + highestNumber.toString());
        for (var i = userNum; i < highestNumber; i++) {
            if (userNum >= 1 && userNum <= highestNumber){
                if (i >= highestNumber) {
                    console.log('We have reached the stopping point: break!');
                    // use the break keyword to exit from the while loop
                    break;
                } else if (i % 2 !== 0) {
                    console.log ("This is an odd number " + i);
                    continue;
                }
            }
        }

}

