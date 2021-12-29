var cars = [
  {
    title: "Audi A3 Limuzina 1.6 TDI DESIGN Edition -Full LED- -FACELIFT-",
    cijena: "34,500.00",
    cijenaPdv: "37,500.00",
    godina: 2016,
    kilometri: "138 000",
    img: "https://www.askramar.com/Files/Foto/Vozila/2021/12/457739.jpg",
  },
  {
    title: "Audi A3 SB 1.6 TDI Sportpaket EXCLUSIVE Model 2017 -FACELIFT-",
    cijena: "32,500.00",
    cijenaPdv: "34,500.00",
    godina: 2017,
    kilometri: "188 000",
    img: "https://www.askramar.com/Files/Foto/Vozila/2021/10/448420.JPG",
  },
  {
    title: "Audi A4 2.0 TDI Attraction -Novi model-",
    cijena: "36,500.00",
    cijenaPdv: "38,500.00",
    godina: 2019,
    kilometri: "121 000",
    img: "https://www.askramar.com/Files/Foto/Vozila/2021/10/448446.JPG",
  },
  {
    title:
      "Audi A4 2.0 TDI S-Tronic Sport Selection S-Line VIRTUAL COCKPIT -Full LED- 150 KS -Novi model-",
    cijena: "47,900.00",
    cijenaPdv: "55,600.00",
    godina: 2019,
    kilometri: "111 000",
    img: "https://www.askramar.com/Files/Foto/Vozila/2021/10/448446.JPG",
  },
];
for (var car of cars) {
  var wrapper = document.createElement("div");
  document.body.appendChild(wrapper);
  wrapper.className = "wrapper";

  var slika = document.createElement("img");
  wrapper.appendChild(slika);
  slika.src = car.img;
  slika.alt = "Slika ";
  slika.style.width = "310px";
  slika.style.height = "200px";

  var naslov = document.createElement("div");
  wrapper.appendChild(naslov);
  naslov.innerHTML = car.title;
  naslov.className = "naslov";

  var cijena = document.createElement("p");
  wrapper.appendChild(cijena);
  cijena.innerHTML = `CIJENA U KM: ${car.cijena}`;
  cijena.className = "paragraf";

  var cijenaPdv = document.createElement("p");
  wrapper.appendChild(cijenaPdv);
  cijenaPdv.innerHTML = `CIJENA U KM+PDV: ${car.cijenaPdv}`;
  cijenaPdv.className = "paragraf zaLiniju";

  var godina = document.createElement("p");
  wrapper.appendChild(godina);
  godina.innerHTML = `GODINA: ${car.godina}`;
  godina.className = "paragraf godina";

  var kilometri = document.createElement("p");
  wrapper.appendChild(kilometri);
  kilometri.innerHTML = `KILOMETRI: ${car.kilometri}`;
  kilometri.style.display = "inline";
  kilometri.className = "paragraf kilometri";
}
