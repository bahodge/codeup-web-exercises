
"use strict";

$(document).ready(function(){

var mapOptions = {
    zoom : 10
};

var coder = new google.maps.Geocoder();
var map;

function initMap() {
    map = new google.maps.Map(document.querySelector('#map-display'), mapOptions);
    var initialSearch =$('#search-bar').val();
    geoCodeIt(initialSearch);
    map.addListener('click', function (e) {
        addMarker(e.latLng, map);
        revGeoCodeIt(e.latLng);
    });
}
//Initialize Map
initMap();

function geoCodeIt(someCity){
    coder.geocode({
        address: someCity,
        componentRestrictions: {
            country: 'US'
        }
    }, function(results, status){
        if(status === "OK"){

            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            map.setCenter(results[0].geometry.location);
            map.setZoom(10);

            requestWeather(latitude.toFixed(8), longitude.toFixed(8));
            deleteMarkers();
            addMarker(results[0].geometry.location);
        } else {
            alert("Geocoding Error! - Status: " + status);
        }
    });
}

function revGeoCodeIt (latLng){
    coder.geocode({location: latLng}, function(results, status){
        if(status === "OK"){

            var latitude = results[0].geometry.location.lat();
            var longitude = results[0].geometry.location.lng();
            map.setCenter(results[0].geometry.location);
            map.setZoom(10);

            requestWeather(latitude.toFixed(8), longitude.toFixed(8));
            deleteMarkers();
            addMarker(results[0].geometry.location);
        } else {
            alert("Geocoding Error! - Status: " + status);
        }
    });
}

//-------------------CLEARING MARKERS!!!!!!!!!!!!!!!!!-------------------//
var markers = [];

function addMarker(location) {
    // $('#search-bar').val(closestCity);
    var marker = new google.maps.Marker({
        position: location,
        animation: google.maps.Animation.DROP,
        map: map,
        draggable: true
    });


    marker.addListener('dragend', function(){
        var markerPos  = new google.maps.LatLng(marker.position.lat(), marker.position.lng());
        revGeoCodeIt(markerPos);


    });

    markers.push(marker);
}

// Sets the map on all markers in the array.
function setMapOnAll(map) {
    for (var i = 0; i < markers.length; i++) {
        markers[i].setMap(map);
    }
}

// Removes the markers from the map, but keeps them in the array.
function clearMarkers() {
    setMapOnAll(null);
}

// Deletes all markers in the array by removing references to them.
function deleteMarkers() {
    clearMarkers();
    markers = [];
}

//-------------------CLEARING MARKERS!!!!!!!!!!!!!!!!!-------------------//

var closestCity;
const WEATHERAPIKEY = "7220976cc650608614cbfd1d2fa88d8a";

function requestWeather(latitude, longitude){
    var forecastRequest = $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: WEATHERAPIKEY,
        units: "imperial",
        lat: latitude,
        lon: longitude
    }).done(function(response){
        buildForecastHTML(response, $('#forecast-length').val());
    }).fail(function(jqObj, status, error){
        console.log('status: ' + status + "     Error Message: "+ error);
    });



    var currentRequest = $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: WEATHERAPIKEY,
        units: "imperial",
        lat: latitude,
        lon: longitude
    }).done(function(response){

        buildCurDayHTML(response);
        //GET NAME OF CLOSEST CITY FOR THE TITLE
        closestCity = response.name;
        $('#app-title').text('Weather in: '+ closestCity);

    }).fail(function(jsObj, status, error){
        console.log('status: ' + status + "     Error Message: "+ error);
    });

}

function buildCurDayHTML(curDay){
    var html = "";
    var iconCode = curDay.weather[0].icon;

    html += "<div class='weather-block col-xs-4'>";
    html += '<h2 class="cur-temp"><span class="high">'+ curDay.main.temp_max.toFixed(1) + '&#8457;</span> / <span class="low"> ' + curDay.main.temp_min.toFixed(1) + '&#8457;</span></h2>';
    html += '<img class="weather-icon" src="http://openweathermap.org/img/w/' + iconCode + '.png">';
    html += '<ul class="weather-list">';
    html += '<li class="weather-list-trait cur-cloud">Clouds: ' + curDay.clouds.all + '</li>';
    html += '<li class="weather-list-trait cur-humidity">Humidity: ' + curDay.main.humidity + '</li>';
    html += '<li class="weather-list-trait cur-wind">Wind Speed: ' + curDay.wind.speed + '</li>';
    html += '<li class="weather-list-trait cur-pressure">Pressure: ' + curDay.main.pressure + '</li>';
    html += '</ul>';
    html += "</div>";

    $('.weather').html(html);
}

function buildForecastHTML(forecastList){
    var html = "";
    var parsedArray = [];


    for (var i = 0; i < forecastList.list.length; i++ ){
        if (i % 8 === 0){
            parsedArray.push(forecastList.list[i]);
        }
    }

    //BELOW will only allow a maximum of 2 days //DEFAULT
    for (var j = 0; j < 2; j++){
        var iconCode = parsedArray[j].weather[0].icon;

        html += "<div class='weather-block col-xs-4'>";
        html += '<h2 class="cur-temp"><span class="high">'+ parsedArray[j].main.temp_max.toFixed(1) + '&#8457;</span> /<span class="low"> ' + parsedArray[j].main.temp_min.toFixed(1) + '&#8457;</span></h2>';
        html += '<img class="weather-icon" src="http://openweathermap.org/img/w/' + iconCode + '.png">';
        html += '<ul class="weather-list">';
        html += '<li class="weather-list-trait cur-cloud">Clouds: ' + parsedArray[j].clouds.all + '</li>';
        html += '<li class="weather-list-trait cur-humidity">Humidity: ' + parsedArray[j].main.humidity + '</li>';
        html += '<li class="weather-list-trait cur-wind">Wind Speed: ' + parsedArray[j].wind.speed + '</li>';
        html += '<li class="weather-list-trait cur-pressure">Pressure: ' + parsedArray[j].main.pressure + '</li>';
        html += '</ul>';
        html += "</div>";
    }
    $('.weather').append(html);
}

$('#search-btn').click(function(){
    geoCodeIt($('#search-bar').val());
    $('#app-title').text('Weather in: '+ closestCity);
});

$('#search-bar').click(function(){
    $(this).val("");
});

});
