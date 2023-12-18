/*
document.addEventListener('DOMContentLoaded', function() {
  var image = document.getElementById("itsemil");
  var opacity = 0;

  var timer = setInterval(function() {
    if (opacity >= 1) {
      clearInterval(timer);
    }
    image.style.opacity = opacity;
    image.style.filter = "alpha(opacity=" + opacity * 100 + ")";
    opacity += 0.02;
  }, 42);
}); 
*/

window.onload = function () {
  var image = document.getElementById("itsemil");
  var opacity = 0;
  image.style.display = "block";

  setTimeout(function () {
    var timer = setInterval(function () {
      if (opacity >= 1) {
        clearInterval(timer);
      }
      image.style.opacity = opacity;
      image.style.filter = "alpha(opacity=" + opacity * 100 + ")";
      opacity += 0.05;
    }, 50);
  }, 1000); // 1000 milliseconds = 1 second
};
