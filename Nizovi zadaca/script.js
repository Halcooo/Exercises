var s1 = "Hello World";
var s2 = "From JavaScript";
var s3 = s1 + s2;

var niz = s3.split("");
console.log(niz);
for (var i = 0; i < niz.length; i++) {
  var element = niz[i];
  if (i % 2 === 0) {
    document.write(`<span style="color:black">${element}</span>`);
  } else {
    document.write(`<span style="color:red">${element}</span>`);
  }
}
