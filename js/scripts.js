$(document).ready(function() {
  $("form#triangle").submit(function(event) {
    const side1 = parseInt($("input#side1").val());
    const side2 = parseInt($("input#side2").val());
    const side3 = parseInt($("input#side3").val());
    let result;
    if (side1 + side2 <= side3 || side2 + side3 <= side1 || side1 + side3 <= side2) {
      result = "Nice try, but that's not a triangle. Shame on you."
    } else {
      if (side1 === side2 && side2 === side3) {
        result = "Grats! Your triange is Equilateral!";
      } else if (side1 !== side2 && side2 !== side3 && side1 !== side3) {
        result = "Wow! Your triangle is scalene!"
      } else {
        result = "Oh, sorry, that's an Isosceles."
      }
    }
    $("#output").text(result);
    event.preventDefault();
  });





});