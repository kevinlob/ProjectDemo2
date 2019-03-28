function doFirst() {
  var button = document.getElementById('button');
  // var button2 = document.getElementById('button2');
  button.addEventListener('click', getNameSingle, false);
  // button2.addEventListener('click', getNameMult, false);

}

function getNameSingle() {
  var user = document.getElementById('user').value;
  document.getElementById('welcome').innerHTML = "Welcome " + user + "!";
  document.getElementById('namePage').style.display = "none";
  document.getElementById('singleplayermodepage').style.display = "block";
  var time = 3;
  var x = setTimeout(setInterval(function () {
    if (time >= 0) {
      time = time - 1;
    } else if (time >= -3) {
      document.getElementById('welcome').style.animation = "fadeOut 1s";
      time = time - 1;
    }
    if (time <= -3) {
      document.getElementById('welcome').style.display = "none";
    }
  }, 1000), 10000);
}

  function TriggeredKey(e) {
    var keycode;
    if (window.event) keycode = window.event.keyCode;
    if (window.event.keyCode == 13) return false;
  }

  window.addEventListener('load', doFirst, false);