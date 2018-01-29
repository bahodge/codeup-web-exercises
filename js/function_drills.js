
//1
function SayHello(name){
    console.log ("Hello " + name);
}

//2
function Capitalize(string){
    //index 1 > length to lowercase.
    var pTwo = string.substring(1, string.length).toLowerCase();
    var pOne = string[0].toUpperCase();
    return console.log (pOne + pTwo);
}

//3
function UpperCase(string){
    return string.toUpperCase();
}

//4
function Identity(input){
    return input;
}
//5
function IsOdd (num) {
    return (num % 2 !== 0);
}

//6
function IsEven (num) {
    return (num % 2 === 0);
}

//7
function IsPositive (num) {
    return (num > 0);
}

//8
function IsNegative (num) {
    return (num < 0);
}

//9
function IsBoolean (bool){
    var dataType = typeof (bool);
    return (dataType === "boolean");
}

//10
function IsTrue(bool){
    return bool === true;
}

//11
function IsFalse(bool){
    return bool === false;
}


//12 -------------- Kind of hard
function IsTruthy(input) {


}
//13 ---------------- Kind of hard
function IsFalsy(input) {


}

//14
function IsVowel(car) {
    var test = car.toLowerCase();
    return (test === ("a") || test === ("e") || test === ("i") || test === ("o") || test === ("u"));
}


//15
function HasVowels(string) {
    var testString = string.toLowerCase();
    for (var i = 0; i < testString.length; i++){
        if (IsVowel(testString[i].toString())){
            return true;
        }
    }
    return false;
}


//16
function IsConsonant (char) {
    if (IsVowel(char)) {
        return false;
    } else {
        return true;
    }
}


//17
function HasConsonants(string) {
    var testString = string.toLowerCase();
    for (var i = 0; i < testString.length; i++){
        if (IsConsonant(testString[i].toString())){
            return true;
        }
    }
    return false;
}

//18



