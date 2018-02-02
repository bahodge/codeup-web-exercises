(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {

            // TODO: complete this method
            // hint: area = pi * radius^2
            var area = Math.PI * (Math.pow(this.radius, 2));
            return area.toFixed(3); // TODO: return the proper value
        },

        logInfo: function (doRounding) {
            // TODO: complete this method.
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding){

               console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(this.getArea()));
            } else {

                console.log("Area of a circle with radius: " + this.radius + ", is: " + this.getArea());
            }
        }

    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");
    // TODO: Change the radius of the circle to 5.

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);


    //Messing around and adding things to the DOM
    var cakes = [

        {
            type: "Carrot",
            icing: "Vanilla",
            size: 5,
            popularity: 1
        },

        {
            type: "Chocolate",
            icing: "Chocolate",
            size: 8,
            popularity: 5
        },
        {
            type: "Bundt",
            icing: "Vanilla",
            size: 3,
            popularity: 4
        },
        {
            type: "Ice Cream",
            icing: "Oreo",
            size: 6,
            popularity: 3
        },
        {
            type: "Cookie Dough",
            icing: "Vanilla & Cookie Dough",
            size: 7,
            popularity: 2
        }
    ];

    //Sort cakes from lowest to highest
    cakes = cakes.sort(function(a, b){
        return a.popularity - b.popularity;
    });

    console.log(cakes);

    var output = "";
    cakes.forEach(function(cake){

        output += "<div class='cake-section'>";
        output += "<h1 class='cake-name'>Cake Name: "  + cake.type + "</h1>";
        output += "<h2>Icing: "  + cake.icing + "</h2>";
        output += "<h2>Serves: "  + cake.size + "</h2>";
        output += "<h2>Popularity: " + cake.popularity + "</h2>";
        output += "<h3>---</h3>";
        output += "</div>";
    });

    document.write(output);







})();
