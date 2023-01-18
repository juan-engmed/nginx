const { default: jsPDF } = require("jspdf");

function gerarPdf() {
  event.preventDefault();
  let doc = new jsPDF();
  doc.text("Hello world!", 10, 10);
  doc.save("a4.pdf");
}

function obterReport() {
  event.preventDefault();

  var divBtnCalc = document.querySelector(".div-btn-calc");
  divBtnCalc.style.display = "none";

  var divBtnLoading = document.querySelector(".div-btn-loading");
  divBtnLoading.style.display = "block";

  var inputlatitude = document.querySelector("#latitude");
  let latitude = inputlatitude.value;

  var inputlongitude = document.querySelector("#longitude");
  let longitude = inputlongitude.value;

  var inputconsumoJan = document.querySelector("#consumoJan");
  let consumoJan = inputconsumoJan.value;

  var inputconsumoFev = document.querySelector("#consumoFev");
  let consumoFev = inputconsumoFev.value;

  var inputconsumoMar = document.querySelector("#consumoMar");
  let consumoMar = inputconsumoMar.value;

  var inputconsumoAbr = document.querySelector("#consumoAbr");
  let consumoAbr = inputconsumoAbr.value;

  var inputconsumoMai = document.querySelector("#consumoMai");
  let consumoMai = inputconsumoMai.value;

  var inputconsumoJun = document.querySelector("#consumoJun");
  let consumoJun = inputconsumoJun.value;

  var inputconsumoJul = document.querySelector("#consumoJul");
  let consumoJul = inputconsumoJul.value;

  var inputconsumoAgo = document.querySelector("#consumoAgo");
  let consumoAgo = inputconsumoAgo.value;

  var inputconsumoSet = document.querySelector("#consumoSet");
  let consumoSet = inputconsumoSet.value;

  var inputconsumoOut = document.querySelector("#consumoOut");
  let consumoOut = inputconsumoOut.value;

  var inputconsumoNov = document.querySelector("#consumoNov");
  let consumoNov = inputconsumoNov.value;

  var inputconsumoDez = document.querySelector("#consumoDez");
  let consumoDez = inputconsumoDez.value;
  const url = `https://calc-solar-production.up.railway.app/calc-solar/lat-long`;

  var payload = {
    longitude: parseFloat(longitude),
    Latitude: parseFloat(latitude),
    consumoJan: parseInt(consumoJan),
    consumoFev: parseInt(consumoFev),
    consumoMar: parseInt(consumoMar),
    consumoAbr: parseInt(consumoAbr),
    consumoMai: parseInt(consumoMai),
    consumoJun: parseInt(consumoJun),
    consumoJul: parseInt(consumoJul),
    consumoAgo: parseInt(consumoAgo),
    consumoSet: parseInt(consumoSet),
    consumoOut: parseInt(consumoOut),
    consumoNov: parseInt(consumoNov),
    consumoDez: parseInt(consumoDez),
  };

  console.log(payload);

  const params = {
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(payload),
    method: "POST",
  };

  fetch(url, params)
    .then(function (response) {
      if (response.status == 500) {
        alert(
          "Erro na operação. Verifique a Lat/Long e Consumos inseridos e tente novamente"
        );
        divBtnLoading.style.display = "none";
        divBtnCalc.style.display = "block";
      }

      if (response.status == 200) {
        var divReport = document.querySelector(".report");

        if (divReport.style.display === "block") {
          divReport.style.display = "none";
        } else {
          divReport.style.display = "block";
        }
        divBtnLoading.style.display = "none";
        divBtnCalc.style.display = "block";
      }

      return response.json();
    })
    .then(function (data) {
      atribuirValoresDoReport(data);
    });
}

function atribuirValoresDoReport(data) {
  //Trifasico
  document.querySelector("#numDePaineisMonofasico").value =
    data.numDePaineisMonofasico;

  document.querySelector("#areaTotalMonofasico").value =
    data.areaTotalMonofasico;

  document.querySelector("#pesoTotalMonofasico").value =
    data.pesoTotalMonofasico;

  document.querySelector("#precoTotalPaineisMonofasico").value =
    data.precoTotalPaineisMonofasico;

  document.querySelector("#nomeInversorAdequadoMonofasico").value =
    data.nomeInversorAdequadoMonofasico;

  document.querySelector("#precoInversorAdequadoMonofasico").value =
    data.precoInversorAdequadoMonofasico;

  //Bifasico
  document.querySelector("#numDePaineisBifasico").value =
    data.numDePaineisBifasico;

  document.querySelector("#areaTotalBifasico").value = data.areaTotalBifasico;

  document.querySelector("#pesoTotalBifasico").value = data.pesoTotalBifasico;

  document.querySelector("#precoTotalPaineisBifasico").value =
    data.precoTotalPaineisBifasico;

  document.querySelector("#nomeInversorAdequadoBifasico").value =
    data.nomeInversorAdequadoBifasico;

  document.querySelector("#precoInversorAdequadoBifasico").value =
    data.precoInversorAdequadoBifasico;

  //Trifasico
  document.querySelector("#numDePaineisTrifasico").value =
    data.numDePaineisTrifasico;

  document.querySelector("#areaTotalTrifasico").value = data.areaTotalTrifasico;

  document.querySelector("#pesoTotalTrifasico").value = data.pesoTotalTrifasico;

  document.querySelector("#precoTotalPaineisTrifasico").value =
    data.precoTotalPaineisTrifasico;

  document.querySelector("#nomeInversorAdequadoTrifasico").value =
    data.nomeInversorAdequadoTrifasico;

  document.querySelector("#precoInversorAdequadoTrifasico").value =
    data.precoInversorAdequadoTrifasico;
}
