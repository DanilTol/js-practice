'use strict';

// TODO Use canvas
const fs = require('fs');
const jsdom = require("jsdom");
const moment = require('moment');
const Chart = require('chart.js');
const { JSDOM } = jsdom;
const dom = new JSDOM(`<!DOCTYPE html><html><head></head><body><canvas id="canvas"></canvas></body></html>`);

module.exports = {
  drawAndSaveChart: data => {
    let fileName = `charts/${moment().format()}.${imageFormat}`;
    let ctx = dom.window.document.querySelector("canvas").getContext("2d");
    let chart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: options
    });

    fs.writeFileSync(fileName, chart.toBase64Image())
  }
}
