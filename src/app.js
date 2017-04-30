/* eslint-disable */
const css = require('./styles.scss');
/* eslint-enable */

const classMates = [
  'Shayla', 'Hector', 'Ralph', 'Jason', 'Christy',
  'Nik', 'Lindsay', 'Kristi', 'Juan', 'Joe', 'JC',
  'George', 'Evan', 'Dave', 'Cole', 'Ciara',
];

function getName() {
  const index = Math.floor(Math.random() * ((15 - 0) + 1)) + 0;
  return classMates[index];
}

const name = getName();

console.log(`Hey, look ${name}... its working!! 🔥🔥🔥🤘🏼`);
