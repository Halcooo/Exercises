var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var boja = document.getElementById("boja").value;
console.log(boja);

ctx.fillStyle = boja;

var pocni = false;


function koordinate(e) {
  var x = e.clientX;
  var y = e.clientY;

  if (pocni) {
    ctx.fillRect(x, y, 2, 2);
  }
}
function crtaj(e) {
  pocni = true;
}
function zavrsi() {
  pocni = false;
}
function submit() {
  boja = document.getElementById("boja").value;
  ctx.fillStyle = boja;
}
