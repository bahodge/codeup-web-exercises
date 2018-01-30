
function LessThanFourtyThousand(){
    var x = 1;

    while (x < 40000) {
        console.log(x *= 2);
    }
}

function IceCream () {
    var totalCones = Math.floor(Math.random() * 50) + 50;
    var conesBought;

    do {
        conesBought = Math.floor(Math.random() * 5) + 1;
        totalCones -= conesBought;
        console.log("Sold: " + conesBought + " Remaining: " + totalCones);

    } while (totalCones > conesBought);
    console.log("Not enough cones remain to sell " + conesBought);
}

