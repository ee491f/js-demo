//console.log(multiply(10, 3));
//let car3 = new Car("Convertible", 3);
//console.log(car3);

$(document).ready(function() {
  console.log("ready!");
  $("button").html("Click Me (Initialized)")
  $("button").on("click", function( event ) {
    //$("p").toggleClass('warning');
    $("p").toggle("slow");
  });
});