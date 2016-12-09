var SEARCH_URL = 'http://api.openweathermap.org/data/2.5/weather?';
var API_KEY = '9be13ca98f24eafcd8d9c1c5b856347b';
// APPID is your unique API key
//example API call: http://api.openweathermap.org/data/2.5/weather?q=Atlanta,GA&units=imperial&appid=9be13ca98f24eafcd8d9c1c5b856347b


// ajax logic
function queryWeather1(searchCity, callbackFn) {
    var params = {
        q: searchCity,
        units: "imperial",
        appid: API_KEY,
        }
    $.getJSON(SEARCH_URL, params, callbackStore1);
}

function queryWeather2(searchCity, callbackFn) {
    var params = {
        q: searchCity,
        units: "imperial",
        appid: API_KEY,
        }
    $.getJSON(SEARCH_URL, params, function(response){
      console.log(response);
    });
}

//event listening logic

$('#js-search').submit(function(event){
      event.preventDefault();
      var searchCity = $(event.currentTarget).find('input').val();
      console.log(searchCity);
      queryWeather1(searchCity, callbackStore1);
  })

// function submission1(){
//   $('#js-search').submit(function(event){
//       event.preventDefault();
//       var searchCity = $(event.currentTarget).find('input').val();

//     queryWeather(searchCity, callbackStore1);
//   })
// }

// function submission2(){
//   $('#js-search').submit(function(event){
//       event.preventDefault();
//       var searchCity = $(event.currentTarget).find('input').val();

//     queryWeather(searchCity, callbackStore2);
//   })
// }

//render functions
//must render weather data for each player AND render winner based upon comparrison of scores

function displayWeather1() {
  }

function displayWeather2(){

}

//callback

function callbackStore1(response) {
   temp1 = response.main.temp
   clouds1 = response.clouds.all
  if (response.weather.main.indexOf('snow') != -1 || response.weather.main.indexOf('rain') != -1) {
   precip1 = true }
  else {
    precip1 = false
  }
}


function callbackStore2(response) {
  temp2 = response.main.temp
  clouds2 = response.clouds.all
  if (response.weather.main.indexOf('snow') != -1 || response.weather.main.indexOf('rain') != -1) {
   precip2 = true
  }
  else {
    precip2 = false
  }
}

//Game Scores

//Compare Temps and Update Scores
//How are we passing in globals
function compareTemp() {
  if (temp1 > temp2) {
  player1_score +=1
}
else if (temperature2 > tempurature1) {
  player2_score +=1
  }
}
//Compare Clouds and Update Scores
function compareClouds() {
  if (clouds1 > clouds2) {
player2_score += 1
}
else if (clouds2 > clouds1) {
  player1_score +=1
  }
}

//Compare Precip Update Scores
function comparePrecip () {
  if (precip1 === true || precip2 === false) {
player2_score += 1
}
else if (precip2 === true || precip1 === false) {
  player1_score +=1
  }
}
