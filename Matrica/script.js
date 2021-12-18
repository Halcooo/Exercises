var tacke = [
  [0, 1],
  [1, 1],
  [2, 1],
  [3, 1],
  [4, 1],
  [5, 1],
  [6, 1],
  [7, 1],
  [8, 1],
  [9, 1],
  [10, 1],
  [11, 1],
  [12, 1],
  [13, 1],
  [14, 1],
  [7, 2],
  [7, 3],
  [7, 4],
  [7, 5],
  [7, 6],
  [7, 7],
  [7, 8],
  [7, 9],
  [7, 10],
  [7, 11],
  [7, 12],
  [7, 13],
  [7, 14],
  [7, 15],
  [7, 16],
  [7, 17],
  [1, 18],
  [2, 18],
  [0, 18],
  [3, 18],
  [4, 18],
  [5, 18],
  [6, 18],
  [7, 18],
  [8, 18],
  [9, 18],
  [10, 18],
  [11, 18],
  [12, 18],
  [13, 18],
  [14, 18],
];
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

for (var y = 0; y < 14; y++) {
  for (var x = 0; x < 20; x++) {
    if (func(y, x)) {
      document.write(`<span class="nule">0</span>`);
    } else {
      document.write(`<span class="tarabe">#</span>`);
    }
  }
  document.write("<br>");
}
console.log(func(4, 2));
