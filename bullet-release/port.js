const { readFileSync, writeFileSync } = require('fs');

const footer = "const bullet = instantiate;\
                export default bullet;";
const body = readFileSync('./bullet.asm.min.js');
writeFileSync('./bullet.temp.js', [body, footer].join('\n'));