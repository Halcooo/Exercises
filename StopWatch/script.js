var div = document.getElementById("div");
var startBtn = document.getElementById("start");
var stopBtn = document.getElementById("stop");
var lapBtn = document.getElementById("lap");
var restartBtn = document.getElementById("restart");

var ms = 0;
var s = 0;
var min = 0;
var interval = setInterval(time, 50);

function time() {
  ms += 5;
  if (ms > 99) {
    s++;
    ms = 0;
  } else if (s > 60) {
    min++;
    s = 0;
  }
  div.innerHTML = `${min} : ${s} : ${ms}`;
}

function start() {
  interval = setInterval(time, 50);
}

function reset() {
  ms = 0;
  s = 0;
  min = 0;
  div.innerHTML = `${min} : ${s} : ${ms}`;
  var laps = (document.getElementById("laps").innerHTML = "");
}

function stop() {
  clearInterval(interval);
}

function lap() {
  var p = document.createElement("p");
  p.innerHTML = `${min} : ${s} : ${ms}`;
  var laps = document.getElementById("laps");
  laps.appendChild(p);
}
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
lapBtn.addEventListener("click", lap);
restartBtn.addEventListener("click", reset);
