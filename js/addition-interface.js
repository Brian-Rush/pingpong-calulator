
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
