function ping(input) {
  for (var i = 1; i <= input; i++) {
    if ((i % 3 === 0) && (i % 5 === 0)) {

      $(".output").append("<li>" + "pingpong" + "</li>");

    } else if (i % 3 === 0) {

      $(".output").append("<li>" + "ping" + "</li>");
    } else if (i % 5 === 0) {

      $(".output").append("<li>" + "pong" + "</li>");
    } else {

      $(".output").append("<li>" + i + "</li>");
    }
  } //end of for
}
//call the function

$(document).ready(function() {
  //gather user input
  //var input=parseInt(prompt("Enter the number"));
  //create a function
  $("#form").submit(function() {
    var input = $("#submit").val();
    ping(input);

    event.preventDefault();
  });



});
