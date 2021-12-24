var language = prompt("Unesite Jezik,Select language / en_us ,sr_rs");
var locales = {
  en_us: {
    hello: "Hello",
    welcome: "Welcome to our page",
    how_are_you: "How are you today?",
  },
  sr_rs: {
    hello: "Dobar dan",
    welcome: "Dobrodošli na našu stranu",
    how_are_you: "Kako ste danas?",
  },
};

document.getElementById("hello").innerText = locales[language].hello;
document.getElementById("welcome").innerText = locales[language].welcome;
document.getElementById("how_are_you").innerText =
  locales[language].how_are_you;
