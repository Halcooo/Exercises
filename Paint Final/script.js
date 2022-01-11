var potvrda = false;

function pocni(e) {
  var x = e.clientX;
  var y = e.clientY;
  potvrda = true;
  crtanje(x, y);
}

function prestani() {
  potvrda = false;
}
var radius = "0%";

function krug() {
  radius = "50%";
}

function kvadrat() {
  radius = "0%";
}

function crtanje(x, y) {
  var boja = document.getElementById("boja").value;
  var debljina = document.getElementById("deb").value + "px";
  var div = document.createElement("div");
  div.style = `width:${debljina};height:${debljina};background:${boja};`;
  div.style.position = "absolute";
  div.style.left = x + "px";
  div.style.top = y + "px";
  div.style.borderRadius = radius;

  var platno = document.getElementById("platno");
  platno.appendChild(div);
}

function koordinate(e) {
  var x = e.clientX;
  var y = e.clientY;

  if (potvrda && y < 290 && x < 490) {
    crtanje(x, y);
  }
}
