document.addEventListener("DOMContentLoaded", function () {
  console.log("vanstart");
  var vid = document.getElementById("myVideo");
  var start = false;
  vid.onloadstart = function () {
    console.log("onloadstart");
    start = true;
  };
  vid.style.opacity = 100.0;

  document.getElementById("button").addEventListener("click", onClickButton);

  function onClickButton() {
    console.log("click1");

    var x = document.getElementById("onePager");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }

    /*console.log("click2");
        vid.play();
        if (start == true) {
          console.log("load");
          setTimeout(function () {
            var e = document.getElementById("myVideo");
            console.log("setT");
            fade(e);
          }, 50);
        }*/
  }

  /*
      function fade(element) {
        var op = 0;
        var timer = setInterval(function () {
          if (op >= 1) clearInterval(timer);
          console.log("setInt");
          element.style.opacity = op;
          element.style.filter = "alpha(opacity=" + op * 100 + ")";
          op += op * 0.1 || 0.1;
        }, 50);
      }*/
});
