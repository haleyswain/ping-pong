//Backend Logic
var game = function (number) {
  if (number % 15 === 0) {
    return "Pingpong!";
}
  else if (number % 5 === 0) {
    return "Pong!";
}
  else if (number % 3 === 0) {
    return "Ping!";
}
  else {
    return number;
  }
}



//Frontend Logic
$(document).ready(function() {
   $("form#pingpong").submit(function(event) {
     var number = $("input#number").val();
         number = parseInt(number);

      $("#answer").empty();
      for (var i = 1; i <= number; i += 1) {
        var result = game (i);

      $("<li>" + result + "</li>").appendTo($("#answer"));
    }
     event.preventDefault();
   });
 });
