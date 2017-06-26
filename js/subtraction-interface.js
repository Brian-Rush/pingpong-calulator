
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
