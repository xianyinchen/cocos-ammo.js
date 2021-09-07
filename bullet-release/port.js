const { readFileSync, writeFileSync } = require('fs');

const footer = "const bullet = instantiate;\
                export default bullet;";
const body = readFileSync('./bullet.asm.min.js');
const time = "//" + new Date() + "\n";
writeFileSync('./bullet.temp.js', [time, body, footer].join('\n'));