const os = require('os');
const totalmemo = os.totalmem();
console.log(`totalmemory = ${totalmemo}`);

const freeMemo = os.freemem();

console.log(`Free memory ${freeMemo}`);
