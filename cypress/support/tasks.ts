const { gerarPdf } = require("../utils/report_pdf.js");
let urlPortal = "";
let imagens: any = [];
let evidencia = "";

module.exports = function tasks(on: any) {
  on("task", {
    saveUrl(url: any) {
      urlPortal = url;
      return urlPortal;
    },
    getUrl() {
      return urlPortal;
    },
    gerarPdfResult(result: any) {
      gerarPdf(result);
      return true;
    },
    prepareEnv() {
      imagens = [];
      return true;
    },
    stepImg(img: any) {
      imagens.push(img);
      return imagens;
    },
    getStepImg() {
      return imagens;
    },
    saveEvidence(ev: any) {
      evidencia = ev;
      return evidencia;
    },
    getEvidence() {
      return evidencia;
    },
  });
};