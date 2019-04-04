
function doFirst() {
  startGame()
  var button = document.getElementById('button');
  button.addEventListener('click', getNameSingle, false);
  var Image1 = document.getElementById('Image1');
  var Image2 = document.getElementById('Image2');
  var Image3 = document.getElementById('Image3');
  var Image4 = document.getElementById('Image4');

  var img = document.getElementById("img1");
  var Img2 = document.getElementById('img2');
  var Img3 = document.getElementById('img3');
  var Img4 = document.getElementById('img4');

  var photo1 = document.getElementById('photo1');
  photo1.addEventListener('click', zoom, false);

  var photo2 = document.getElementById('photo2');
  photo2.addEventListener('click', zoom2, false);

  var photo3 = document.getElementById('photo3');
  photo3.addEventListener('click', zoom3, false);

  var photo4 = document.getElementById('photo4');
  photo4.addEventListener('click', zoom4, false);

  document.getElementsByClassName("close")[0].onclick = function () {
    Image1.style.display = "none";
  }
  document.getElementsByClassName("close")[1].onclick = function () {
    Image2.style.display = "none";
  }
  document.getElementsByClassName("close")[2].onclick = function () {
    Image3.style.display = "none";
  }
  document.getElementsByClassName("close")[3].onclick = function () {
    Image4.style.display = "none";
  }

  document.getElementById('clear').onclick = function () {
    document.getElementById('guess').value = ""
  }

  document.getElementById('submit').onclick = function () {
    if (document.getElementById('guess').value.toLowerCase() == current_Round.answer.toLowerCase()) {
      nextRound();
      document.getElementById('correctScreen').style.display = "block";
      if (score + 1 >= 10) {
        win()
        score = 0
        isWin = true;
        document.getElementById('container').style.display = "none"
      } else {
        score = score + 1
        document.getElementById('score').innerHTML = "Score: " + score
      }
    } else {
      score = score - 1
      document.getElementById('incorrectScreen').style.display = "block"
      if (score < 0) {
        lose();
        score =0
        isLose = true;
        document.getElementById('container').style.display = "none"
      } else {
        document.getElementById('score').innerHTML = "Score: " + score
      }
    }
  }

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

      if (isWin == false && isLose == false) {
        document.getElementById('welcome').style.display = "none";
        document.getElementById('container').style.display = "block";
        document.getElementById('logo').style.display = "block";
        document.getElementById('indexBody').style.animation = "backwards 4s infinite";
      }
    }
  }, 1000), 8000);
}
window.addEventListener('load', doFirst, false);

var score = 0
var isWin = false
var isLose = false