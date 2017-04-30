/* eslint-disable */
const css = require('./styles.scss');
/* eslint-enable */

let name = '';
const randNum = Math.floor(Math.random() * ((16 - 1) + 1)) + 1;

switch (randNum) {
  case 1: name = 'Ciara'; break; case 2: name = 'Cole'; break;
  case 3: name = 'Dave'; break; case 4: name = 'Evan'; break;
  case 5: name = 'George'; break; case 6: name = 'JC'; break;
  case 7: name = 'Joe'; break; case 8: name = 'Juan'; break;
  case 9: name = 'Kristi'; break; case 10: name = 'Lindsay'; break;
  case 11: name = 'Nik'; break; case 12: name = 'Christy'; break;
  case 13: name = 'Jason'; break; case 14: name = 'Ralph'; break;
  case 15: name = 'Hector'; break; case 16: name = 'Shayla'; break;
  default: name = 'human';
}

console.log(`Hey, look ${name}... its working!! 🔥🔥🔥🤘🏼`);
