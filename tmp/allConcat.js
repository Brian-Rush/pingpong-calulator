
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
