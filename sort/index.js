'use strict';

const moment = require('moment');
const utils = require('./utils.js');
const chart = require('./chart.js');
const sortings = require('./algorithms');

const step = 100;
const arrMaxLength = 1000;
const arrMaxElement = 100000;
const imageFormat = 'jpg';

let data = [];

for (let i = step; i <= arrMaxLength; i = i + step) {
  let array = utils.randomArray(i, arrMaxElement);

  let start = new Date().getTime();
  sortings.merge(array);
  let end = new Date().getTime();

  data.push([i, end - start]);
}


chart.exportChart(chart.getChart(data));
