(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "bf9a6263d6d6ffa211df8c15b51c59d9";

},{}],2:[function(require,module,exports){
function Calculator(skinName) {
  this.skin = skinName;
}

Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.addition = function(x, y) {
  var output = x + y;
  return output;
};

Calculator.prototype.subtraction = function(x, y) {
  var output = x - y;
  return output;
};

exports.calculatorModule = Calculator;

},{}],3:[function(require,module,exports){
var apiKey = require('./../.env').apiKey;

Weather = function(){
}

Weather.prototype.getWeather = function(city, displayHumidity) {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + apiKey).then(function(response) {
    displayHumidity(city, response.main.humidity);
  }).fail(function(error) {
    $('.showWeather').text(error.responseJSON.message);
  });
}

exports.weatherModule = Weather;

},{"./../.env":1}],4:[function(require,module,exports){

$(document).ready(function() {
  $('#addition').submit(function(event) {
    event.preventDefault();
    var firstNumber = parseInt($('#first-number').val());
    var secondNumber = parseInt($('#second-number').val());
    var additionCalculator = new Calculator("hot pink");
    var sum = additionCalculator.addition(firstNumber, secondNumber);
    $('#solution').append("<li>" + sum + "</li>");
    console.log('hello');
  });
});

var Calculator = require('./../js/pingpong.js').calculatorModule;

$(document).ready(function() {
  $('#ping-pong-form').submit(function(event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function(element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

$(document).ready(function(){
  $('#signup').submit(function(event){
    event.preventDefault();
    var email = $('#email').val();
    $('#signup').hide();
    $('#solution').prepend('<p>Thank you, ' + email + ' has been added to our list!</p>');
  });
});


$(document).ready(function() {
  $('#subtraction').submit(function(event) {
    event.preventDefault();
    var firstNumber = parseInt($('#first-subtract').val());
    var secondNumber = parseInt($('#second-subtract').val());
    var subtractionCalculator = new Calculator;
    var subtract = subtractionCalculator.subtraction(firstNumber, secondNumber);
    $('#solution').append("<li>" + subtract + "</li>");
    console.log('hello');
    console.log(firstNumber);
    console.log(secondNumber);
  });
});

$(document).ready(function(){
  $('#time').text(moment());
});

var Weather = require('./../js/weather.js').weatherModule

//Callback function, stored in variable, to pass info to back end
var displayHumidity = function(city, humidityData) {
  $('.showWeather').text("The humidity in " + city + " is " + humidityData +"%.")
}

$(document).ready(function() {
  var currentWeatherObject = new Weather();
  $('#weather-location').click(function() {
    var city = $('#location').val();
    $('#location').val("");
    currentWeatherObject.getWeather(city, displayHumidity);
  });
});

},{"./../js/pingpong.js":2,"./../js/weather.js":3}]},{},[4]);
