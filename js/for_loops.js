function MultiplyTillTen(a){
    for (var i = 1; i <= 10; i++){
        console.log(a.toString() + " x " + i.toString() + " = " + a*i);
    }
}

function checkEvenOdd(){
    for (var i = 1; i <= 10; i++){
        var randomNum = Math.floor(Math.random() * 200) + 20;

        if(randomNum % 2 === 0){
            console.log(randomNum + " is even");
        } else {
            console.log (randomNum + " is odd");
        }
    }
}

function NumberPyramid (numRows) {
    var output="";
    for (var i = 1; i <= numRows; i++) {

        for (var j = 1; j <= i; j++) {
            output += i + "";
        }
            console.log(output);
            output="";
    }
}

function CountByFive(startNum){

    for (var i = startNum; i >= 0; i-- ){
        if (i % 5 === 0){
            console.log(i);
        }
    }

}

