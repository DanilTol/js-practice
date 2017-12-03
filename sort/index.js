'use strict';

const utils = require('./utils.js');
const sortings = require('./algorithms');

const step = 100;
const arrMaxLength = 1000;
const arrMaxElement = 10000;

let data = {};
Object.keys(sortings).forEach(key => data[key] = []);

for (let i = step; i <= arrMaxLength; i = i + step) {
  let array = utils.randomArray(i, arrMaxElement);

  Object.keys(sortings).forEach(key => {
    let start = new Date().getTime();
    let a = sortings[key](array);
    let end = new Date().getTime();

    console.log(key, i, end - start);
    data[key].push({ x: i, y: end - start });
  });
}
