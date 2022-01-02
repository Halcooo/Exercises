var tacke = [];

function jeIsti(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

function func(y, x) {
  var arr = [y, x];

  for (i = 0; i < tacke.length; i++) {
    if (jeIsti(tacke[i], arr)) {
      return true;
    }
  }
}

function zaTacku(y, x) {
  var tacka = document.createElement("div");
  tacka.style = "background:black;width:1px;height:1px;margin:0;float:left;";

  return tacka;
}

function zaPrazno() {
  var prazno = document.createElement("div");
  prazno.style = "width:1px;height:1px;background:white;margin:0;float:left;";

  return prazno;
}
function koordinate(event) {
  var y = Math.round(event.clientY);
  var x = Math.round(event.clientX);
  if (event.pressure == 0.5) {
    tacke.push([y, x]);
  }
}

function crtaj() {
  var platno = document.createElement("div");
  platno.id = "platno";
  document.body.appendChild(platno);
  platno.addEventListener("mouseup", crtaj);
  platno.addEventListener("pointermove", koordinate);
  for (var y = 0; y < 100; y++) {
    for (var x = 0; x < 200; x++) {
      if (func(y, x)) {
        platno.appendChild(zaTacku());
      } else {
        platno.appendChild(zaPrazno());
      }
    }
  }
}
crtaj();
