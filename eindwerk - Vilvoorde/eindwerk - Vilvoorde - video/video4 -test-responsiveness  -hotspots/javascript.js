window.addEventListener("load", onVrViewLoad);

function onVrViewLoad() {
  var vrView = new VRView.Player("#vrview", {
    image:
      "https://cors-anywhere.herokuapp.com/http://www.dotdotcommadot.org/maurits/test4.jpg",
    width: document.getElementById("vrview").offsetWidth,
    /*width: 800,*/
    height: 800,
  });

  vrView.on("ready", function () {
    vrView.addHotspot("dining-room", {
      pitch: 30, // In degrees. Up is positive.
      yaw: 20, // In degrees. To the right is positive.
      radius: 0.05, // Radius of the circular target in meters.
      distance: 2, // Distance of target from camera in meters.
    });
  });
}
