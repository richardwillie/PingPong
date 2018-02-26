var pingArray = [];

function pingPong(input) {
  // set limit for input
  if (input <= 100) {
    for (var i = 1; i <= input; i++) {
      if ((i % 3 === 0) && (i % 5 === 0)) {
        console.log("pingpong");
        pingArray.push("pingpong")
      } else if (i % 3 === 0) {
        console.log("ping");
        pingArray.push("ping");
      } else if (i % 5 === 0) {
        console.log("pong");
        pingArray.push("pong");
      } else {
        console.log(i);
        pingArray.push(i)
      }
    }
  } else {
    alert("enter number less than or equal to 100")
  }
}


$(document).ready(function() {
  $('form#pingpong').submit(function(event) {
    event.preventDefault();
    var input = $('input#ping').val();
    pingPong(input);

    pingArray.forEach(function(elements) {
      $('ul#list').append("<li>" + elements + "</li>");
    });
  });
});
