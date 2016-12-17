var add = function(number1, number2) {
  return number1 + number2;
};

var subtract = function(number1, number2) {
  return number1 - number2;
};

var multiply = function(number1, number2) {
  return number1 * number2;
};

var divide = function(number1, number2) {
  return number1 / number2;
};

$(function() {
  $("button#addition").click(function(event) {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result = (add(number1, number2));
    $("#output").text(result);
    event.preventDefault();
  });

  $("button#subtraction").click(function(event) {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result = (subtract(number1, number2));
    $("#output").text(result);
    event.preventDefault();
  });

  $("button#multiplication").click(function(event) {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result = (multiply(number1, number2));
    $("#output").text(result);
    event.preventDefault();
  });

  $("button#division").click(function(event) {
    var number1 = parseInt($("#input1").val());
    var number2 = parseInt($("#input2").val());
    var result = (divide(number1, number2));
    $("#output").text(result);
    event.preventDefault();
  });
});
