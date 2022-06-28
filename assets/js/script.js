// global variables
// OpenWeather API key
const apiKey = "e261e39b4d04f455b908d62590c75a6c";
// element references

// other variables
// initial location for new users
var defaultLocation = "Cleveland";

// functions
// retrieve weather data from OpenWeather API
function getWeatherData(coordinates) {
    // format API url
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coordinates.lat + "&lon=" + coordinates.lon + "&exclude=minutely,hourly&appid=" + apiKey;

    // request weather object
    fetch(apiUrl)
    .then(function(response) {
        // convert response to JSON
        response.json()
        .then(function(data) {
            console.log(data);
        })
    })
};

// get lat/lon coordinates for requested city
function getCityCoordinates(location) {
    // object for lat/lon coordinates
    var coordinates = {};
    // format API url
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + location + "&appid=" + apiKey;

    // request lat/lon coordinates from api
    fetch(apiUrl)
    .then(function(response) {
        // convert response to JSON
        response.json()
        .then(function(data) {
            console.log(data);
            // retrieve lat/lon from data object
            coordinates = {
                lat: data[0].lat,
                lon: data[0].lon
            };
            // get weather object
            getWeatherData(coordinates);
        });
    });
};

// function to update current weather section


// function to create forecast card


// function to create city button and add to recents list


// function to save 10 most recent searches to local storage


// function to load searches


// event handlers


// event listeners

