(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    /**
     * TODO:
     * Convert planetsString to an array, and save it in a variable named
     * planetsArray.
     * console.log planetsArray to check your work
     */

    planetsArray = planetsString.split("|");
    // console.log(planetsArray);

    /**
     * TODO:
     * Create a string with <br> tags between each planet. console.log() your
     * results. Why might this be useful?
     *
     * BONUS:
     * Create another string that would display your planets in an undordered
     * list. You will need an opening AND closing <ul> tags around the entire
     * string, and <li> tags around each planet.
     */

    //Break Tag
    // planetsString = planetsArray.join('<br>');
    // console.log(planetsString);

    // //Unordered list
    // planetsArray = planetsString.split('<br>');
    // console.log (planetsArray);
    //
    //
    // var planetsUl = ['<ul>', '</ul>'];
    // var planetsLi = [];
    //
    // for (var i = planetsArray.length -1; i >= 0; i--) {
    //     planetsLi.splice(0, 0, "<li>" + planetsArray[i] + "</li>");
    //
    // }
    //
    // planetsUl.splice(1, 0, planetsLi);
    //
    // console.log(planetsUl.join(''));
    //

    //Long Way of Solving the Ul/li problem
    //
    var stringOutput = "";

    stringOutput += "<ul>";
    stringOutput += "<li>"
    stringOutput += "Mercury";
    stringOutput += "</li><li>";
    stringOutput += "Venus";
    stringOutput += "</li><li>";
    stringOutput += "Earth";
    stringOutput += "</li><li>";
    stringOutput += "Mars";
    stringOutput += "</li><li>";
    stringOutput += "Jupiter";
    stringOutput += "</li><li>";
    stringOutput += "Saturn";
    stringOutput += "</li><li>";
    stringOutput += "Uranus";
    stringOutput += "</li><li>";
    stringOutput += "Neptune";
    stringOutput += "</li>";
    stringOutput+= "</ul>";

    console.log(stringOutput);
    document.write("Writing the HTML for EACH element. NOT Flexible");
    document.write(stringOutput);

    // with join ---- GOOD WAY!
    var newPlanetString ="Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";

    var outputString ="";
    planetsArray = newPlanetString.split("|");
    outputString += "<ul><li>";
    outputString += planetsArray.join ("</li><li>");
    outputString += "</li></ul>";

    console.log(outputString);
    document.write("Used 'Join' method");
    document.write(outputString);

    //with loop --- GOOD WAY!

    var planetsHTML = "<ul>";

    planetsArray.forEach(function(planet){
       planetsHTML += "<li>" + planet + "</li>";
    });

    planetsHTML += "</ul>";

    console.log(planetsHTML);
    document.write("Used a 'forEach' loop");
    document.write(planetsHTML);

})();
