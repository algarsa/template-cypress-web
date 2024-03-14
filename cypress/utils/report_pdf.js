const fs = require("fs");
const Pdfmake = require("pdfmake")
const moment = require("moment");
const date = moment();
let fonts = {
  Roboto: {
    normal: ".\\cypress\\utils\\fonts\\Roboto-Regular.ttf",
    bold: ".\\cypress\\utils\\fonts\\Roboto-Medium.ttf",
    italics: ".\\cypress\\utils\\fonts\\Roboto-Italic.ttf",
    bolditalics: ".\\cypress\\utils\\fonts\\Roboto-MediumItalic.ttf",
  },
};
function gerarPdf(results) {
  let pdfmake = new Pdfmake(fonts);
  let listTableDocs = {
    content: [
      {
        text: "\n\n",
      },
      { image: ".\\cypress\\utils\\logo\\logo.png", width: 150, alignment: "center" },
      {
        text: "\n\n",
      },
    ],
    styles: {
      header: {
        fontSize: 18,
        bold: true,
        alignment: "center",
        margin: [0, 30, 0, 20],
      },
      subheader: {
        fontSize: 14,
        margin: [0, 15, 0, 10],
        color: "#003893",
      },
      text: {
        alignment: "center",
      },
      link: {
        decoration: "underline",
        color: "#0074c1",
      },
    },
  };

  let table = { headerRows: 1, margin: [150, 25, 0, 15], body: [] };

  table.body.push(["Nome do cenário:", results.nomeCenario]);
  table.body.push(["Data", date.format("DD-MM-YYYY HH:mm:ss")]);
  table.body.push(["Tempo de Execução:", results.tempoExecucao + "s"]);
  table.body.push(["Status:", results.status]);

  listTableDocs["content"].push({
    table: table,
    margin: [100, 20, 0, 8],
    layout: {
      fillColor: function (rowIndex) {
        if (rowIndex === 3 && results.status == "passed") {
          return rowIndex === 3 ? "green" : null;
        }
        if (rowIndex === 3 && results.status == "failed") {
          return rowIndex === 3 ? "red" : null;
        }
      },
    },
  });
  results.steps.forEach((s, index) => {
    let step = "Given";
    if (s.type == "Action") step = "When";
    if (s.type == "Outcome") step = "Then";
    listTableDocs["content"].push({
      text: `\n${step} ${s.text} \n`,
    });

    listTableDocs["content"].push({
      image: "data:image/jpeg;base64," + results.evidencia[index],
      width: 500,
      height: 450,
      margin: [10, 0, 10, 0],
    });
  });

  pdfDoc = pdfmake.createPdfKitDocument(listTableDocs, {});
  var regex = /[^a-zA-Z0-9]/g;
  let nomeCenarioFinal = results.nomeCenario.replaceAll(regex, "");
  let var10000 = results.status.replaceAll(regex, "").toUpperCase();

  let writeStream = fs.createWriteStream(`.\\cypress\\reports\\pdf-reports\\[${var10000}]${date.format("YYYY-MM-DD-HH-mm-ss")}-${nomeCenarioFinal}.pdf`);
  pdfDoc.pipe(writeStream);
  pdfDoc.end();

  writeStream.on("finish", function () {
    console.log("Arquivo PDF foi criado e conteúdo escrito com sucesso.");
  });
}

module.exports = {
  gerarPdf,
};
