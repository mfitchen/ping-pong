// JavaScript/jQuery Business Logic
var pingPongList = function(inputNumber) {

  var pingPongArray = [];

  for(var index = 1; index <= inputNumber; index += 1) {
    if (index % 15 === 0) {
      pingPongArray.push("pingpong");
    } else if (index % 5 === 0) {
      pingPongArray.push("pong");
    } else if (index % 3 === 0) {
      pingPongArray.push("ping");
    } else {
      pingPongArray.push(index);
    }
  }

  return pingPongArray;
};

// JavaScript/jQuery Front-End Logic
$(document).ready(function() {
  $("form#ping-pong-form").submit(function(event) {
    event.preventDefault();

    $("ul.list-ping-pong li").remove();

    var inputNumber = parseInt($("input#ping-pong-number").val());
    var pongResults = pingPongList(inputNumber);

    pongResults.forEach(function(pongResult) {
      $(".list-ping-pong").append("<li>" + pongResult + "</li>");
    });

    $("#output-ping-pong").show();
  });
});
