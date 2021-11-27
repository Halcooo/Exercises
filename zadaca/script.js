var prviBroj = parseInt(prompt("Unesite prvi broj"));
var drugiBroj = parseInt(prompt("Unesite drugi broj"));
var operator = prompt(
  "Unesite operator(( za sabiranje +  ),(za oduzimanje - ),(za množenje * ),(za dijeljenje / ))"
);
var potvrda = confirm("Izvršiti operaciju?");
function potvrdaKorisnika(potvrda) {
  if (potvrda == true) {
    matematika(prviBroj, drugiBroj, operator);
  }
}

function matematika(prviBroj, drugiBroj, operator) {
  if (operator == "+") {
    alert(prviBroj + drugiBroj);
  } else if (operator == "-") {
    alert(prviBroj - drugiBroj);
  } else if (operator == "*") {
    alert(prviBroj * drugiBroj);
  } else if (operator == "/") {
    alert(prviBroj / drugiBroj);
  } else alert("Unjeli ste pogrešan operator");
}
potvrdaKorisnika(potvrda);
