'use strict';

module.exports = {
  randomArray: (length, max) => [...new Array(length)]
    .map(() => Math.round(Math.random() * max)),
}
