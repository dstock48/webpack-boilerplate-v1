/* eslint-disable */
const css = require('./styles.scss');
/* eslint-enable */

const name = 'Dave';
console.log(`Hey, look ${name}... it worked!`);

setInterval(() => {
  const unorderedList = document.querySelector('ul');
  unorderedList.classList.toggle('color-border');
}, 600);
