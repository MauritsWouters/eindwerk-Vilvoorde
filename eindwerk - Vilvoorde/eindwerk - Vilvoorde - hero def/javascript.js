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

    var fadeTarget = document.getElementById("onePager");
    var fadeEffect = setInterval(function () {
      if (!fadeTarget.style.opacity) {
        fadeTarget.style.opacity = 1;
      }
      if (fadeTarget.style.opacity > 0) {
        fadeTarget.style.opacity -= 0.01;
      } else {
        clearInterval(fadeEffect);
      }
    }, 300);

    /*document.getElementById("button").addEventListener("click", fadeOutEffect);*/

    /*var x = document.getElementById("onePager");
    if ((x.style.opacity = 100.0)) {
      /*x.style.opacity = 0.0;*/

    /*console.log("click2");
      vid.play();
      if (start == true) {*/
    /*console.log("load");
      setTimeout(function () {
        var e = document.getElementById("onePager");
        console.log("setT");
        fade(e);
      }, 50);
    } else {
      x.style.opacity = 0.0;
      /*setTimeout(function () {
        var e = document.getElementById("onePager");
        console.log("setT");
        fade(e);
      }, 50);*/
  }
  /*}*/
  /*
  function fade(element) {
    var op = 0;
    var timer = setInterval(function () {
      /*var timer = setInterval(function () {*/
  /*if (op >= 1) clearInterval(timer);
      console.log("setInt");
      element.style.opacity = op;
      element.style.filter = "alpha(opacity=" + op * 100 + ")";
      op += op * 0.1 || 0.1;
    }, 50);
  }*/
});
