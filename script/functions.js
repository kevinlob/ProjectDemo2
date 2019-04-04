function TriggeredKey(e) {
  var keycode;
  if (window.event) keycode = window.event.keyCode;
  if (window.event.keyCode == 13) return false;
}

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
function lose(){
console.log("YOU LOSE");
var user = document.getElementById('user').value
document.getElementById('youLose').innerHTML = "Sorry, " + user + " You Lose."
document.getElementById('container').style.display ="none"
document.getElementById('loseScreen').style.display = "block"
}
function win(){
console.log("YOU WIN");
var user = document.getElementById('user').value;
document.getElementById('youWin').innerHTML = "Congratulations "+ user + " You Win!" 
document.getElementById('container').style.display ="none" 
document.getElementById('winScreen').style.display = "block"
}
function hideCorrect(){
  var el = document.getElementById('correctScreen');
   el.style.display = "none"
}
function hideWrong(){
  var el = document.getElementById('incorrectScreen');
  el.style.display = "none"
}
function reset(){
  user = ""
  round = start_round
  current_Round = round_1
  isWin = false
  isLose = false
  startGame()
  document.location.reload(true);
  document.getElementById('winScreen').style.display = "none"
  document.getElementById('loseScreen').style.display = "none"
}
function startGame(){
  document.getElementById('photo1').src = current_Round.photo1
  document.getElementById('photo2').src = current_Round.photo2
  document.getElementById('photo3').src = current_Round.photo3
  document.getElementById('photo4').src = current_Round.photo4
  document.getElementById('guess').value = ""

}
