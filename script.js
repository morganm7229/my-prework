// global constants
var clueHoldTime = 1000; //how long to hold each clue's light/sound
var cluePauseTime = 333; //how long to pause in between clues
var nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence

//Global Variables
var pattern = [];
var progress = 0;
var gameLength = 200;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;  //must be between 0.0 and 1.0
var guessCounter = 0;
var minButton = 1;
var maxButton = 4;
var highScore4 = 0;
var highScore5 = 0;
var highScore6 = 0;
var strikes = 3;
var colorOn = true;
var difficulty = 2;

function startGame(){
  //initialize game variables
  progress = 0;
  strikes = 3;
  clueHoldTime = 1000;
  cluePauseTime = 333;
  gamePlaying = true;
  pattern = []
  for (let i = 0; i < gameLength; i++) {
    pattern.push(Math.floor(Math.random() * (maxButton - minButton + 1) + minButton));
  }
  console.log(pattern);
  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");
  playClueSequence()
}

function stopGame(){
  highScores();
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 200,
  2: 250,
  3: 300,
  4: 350,
  5: 400,
  6: 450
}

function playTone(btn,len){ 
  o.frequency.value = freqMap[btn]
  g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
  tonePlaying = true
  setTimeout(function(){
    stopTone()
  },len)
}
function startTone(btn){
  if(!tonePlaying){
    o.frequency.value = freqMap[btn]
    g.gain.setTargetAtTime(volume,context.currentTime + 0.05,0.025)
    tonePlaying = true
  }
}
function stopTone(){
    g.gain.setTargetAtTime(0,context.currentTime + 0.05,0.025)
    tonePlaying = false
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext()
var o = context.createOscillator()
var g = context.createGain()
g.connect(context.destination)
g.gain.setValueAtTime(0,context.currentTime)
o.connect(g)
o.start(0)

function lightButton(btn){
  document.getElementById("btn"+btn).classList.add("lit")
}

function clearButton(btn){
  document.getElementById("btn"+btn).classList.remove("lit")
}

function playSingleClue(btn){
  if(gamePlaying){
    lightButton(btn);
    playTone(btn,clueHoldTime);
    setTimeout(clearButton,clueHoldTime,btn);
  }
}

function playClueSequence(){
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for(let i=0;i<=progress;i++){ // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms")
    setTimeout(playSingleClue,delay,pattern[i]) // set a timeout to play that clue
    delay += clueHoldTime 
    delay += cluePauseTime;
  }
}

function loseGame(){
  stopGame();
  alert("Game Over. You Lost.");
  highScores();
}

function winGame(){
  stopGame();
  alert("Game Over. You Win!");
  highScores();
}

function guess(btn){
  console.log("user guessed: " + btn);
  if(!gamePlaying){
    return;
  }
  
  if(pattern[guessCounter] == btn){
    console.log("Correct Guess: " + btn);
    if(guessCounter == progress) {
      if(progress == pattern.length - 1){
        winGame();
      }
      else {
        progress++;
        if (clueHoldTime > 300) {
          clueHoldTime = clueHoldTime - (25 * difficulty);
        }
        if (cluePauseTime > 100) {
          cluePauseTime = cluePauseTime - (11 * difficulty);
        }
        playClueSequence();
      }
    }
    else {
      guessCounter++;
    }
  }
  else {
    if (strikes > 0) {
      strikes--;
      alert("Incorrect guess. " + strikes + " strikes left.");
    }
    else {
      loseGame();
    }
  }
  // add game logic here
}

function setMaxButtons(count) {
  maxButton = count;
  if (maxButton == 4) {
    document.getElementById("btn5").classList.add("hidden");
    document.getElementById("btn6").classList.add("hidden");
  }
  else if (maxButton == 5) {
    document.getElementById("btn5").classList.remove("hidden");
    document.getElementById("btn6").classList.add("hidden");
  }
  else if (maxButton == 6) {
    document.getElementById("btn5").classList.remove("hidden");
    document.getElementById("btn6").classList.remove("hidden");
  }
  stopGame();
}

function highScoreCheck() {
  alert("Your high score for easy is: " + highScore4 + "\n" + "Your high score for medium is: " 
        + highScore5 + "\n" + "Your high score for hard is: " + highScore6);
}

function highScores() {
  if (difficulty == 1) {
    if (progress > highScore4) {
      highScore4 = progress;
      alert("New High Score for easy!: " + highScore4);
    }
  }
  else if (difficulty == 2) {
    if (progress > highScore5) {
      highScore5 = progress;
      alert("New High Score for medium!: " + highScore5);
    }
  }
  else if (difficulty == 3) {
    if (progress > highScore6) {
      highScore6 = progress;
      alert("New High Score for Hard!: " + highScore6);
    }
  }
}

function changeDifficulty(change) {
  difficulty = change;
  if (difficulty == 1) {
    document.getElementById("easy").classList.add("selected");
    document.getElementById("medium").classList.remove("selected");
    document.getElementById("hard").classList.remove("selected");
  }
  else if (difficulty == 2) {
    document.getElementById("easy").classList.remove("selected");
    document.getElementById("medium").classList.add("selected");
    document.getElementById("hard").classList.remove("selected");
  }
  else if (difficulty == 3) {
    document.getElementById("easy").classList.remove("selected");
    document.getElementById("medium").classList.remove("selected");
    document.getElementById("hard").classList.add("selected");
  }
}