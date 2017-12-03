'use strict';

const fs = require('fs');
const jsdom = require('jsdom').jsdom;
const anychart = require('anychart');
const anychartExport = require('anychart-nodejs')(anychart);

module.exports = {
  exportChart: chart => {
    let fileName = `charts/${moment().format()}.${imageFormat}`;
    anychartExport.exportTo(chart, imageFormat)
      .then(image => fs.writeFileSync(fileName, image))
      .then(() => console.log('Export completed. Path to image - ' + fileName))
      .catch(err => console.error(err.message));
  },
  getChart: data => {
    // create default jsdom view
    let d = jsdom('<body><div id="container"></div></body>');
    let anychart = anychart(d.defaultView);

    let dataSet = anychart.data.set(data);
    let seriesData = dataSet.mapAs({ 'x': 0, 'value': 1 });
    let chart = anychart.area3d();
    var series = chart.area(seriesData);

    chart.container('container');
    chart.draw();

    return chart;
  }
}
