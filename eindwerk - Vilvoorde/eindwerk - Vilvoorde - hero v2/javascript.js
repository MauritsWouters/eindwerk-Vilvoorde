var e = document.getElementById("myVideo");
e.style.opacity = 0;

function onClickButton() {
  var vid = document.getElementById("myVideo");
  vid.oncanplaythrough = function () {
    setTimeout(function () {
      var e = document.getElementById("myVideo");
      fade(e);
    }, 50);
  };

  function fade(element) {
    var op = 0;
    var timer = setInterval(function () {
      if (op >= 1) clearInterval(timer);
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.1 || 0.1;
    }, 50);
  }
}
