const { readFileSync, writeFileSync } = require('fs');

const footer = "export default instantiate;";
const body = readFileSync('./bullet.asm.min.js');
writeFileSync('./bullet.temp.js', [body, footer].join('\n'));