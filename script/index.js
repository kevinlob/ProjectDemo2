
function doFirst() {
  var button = document.getElementById('button');
  // var button2 = document.getElementById('button2');
  button.addEventListener('click', getNameSingle, false);
  // button2.addEventListener('click', getNameMult, false);
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

  document.getElementById('submit').onclick = function(){
    if(document.getElementById('guess').value.toLowerCase() == current_Round.answer.toLowerCase()){
      nextRound();
      score = score+1
      document.getElementById('score').innerHTML = "Score: "+ score
      console.log(current_Round.answer)
    }
    else{
      console.log("INCORRECT");
      console.log(current_Round.answer)
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
      document.getElementById('welcome').style.display = "none";
      document.getElementById('container').style.display = "block";
      document.getElementById('logo').style.display = "block";
      document.getElementById('indexBody').style.animation = "backwards 4s infinite";
    }
  }, 1000), 10000);
}

function TriggeredKey(e) {
  var keycode;
  if (window.event) keycode = window.event.keyCode;
  if (window.event.keyCode == 13) return false;
}

window.addEventListener('load', doFirst, false);

function zoom() {
  Image1.style.display = "block";
  document.getElementById('img1').src = this.src;
}

function zoom2() {
  Image2.style.display = "block";
  document.getElementById('img2').src = this.src;
}

function zoom3() {
  Image3.style.display = "block"
  document.getElementById('img3').src = this.src;
}

function zoom4() {
  Image4.style.display = "block"
  document.getElementById('img4').src = this.src
}
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function nextRound(){
  index = round.indexOf(current_Round)
  round.splice(index, 1)
  random = getRandomInt(round.length)
  current_Round= round[random]
  document.getElementById('guess').value = "";
  document.getElementById('photo1').src = current_Round.photo1
  document.getElementById('photo2').src = current_Round.photo2
  document.getElementById('photo3').src = current_Round.photo3
  document.getElementById('photo4').src = current_Round.photo4

}
var score = 0
