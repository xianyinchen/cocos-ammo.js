const { readFileSync, writeFileSync } = require('fs');

const header = readFileSync('./ammo.js.start').toString();
const footer = readFileSync('./ammo.js.end').toString();
const body = readFileSync('./../ammo.js');
writeFileSync('./ammo.cocos.js', [header, body, footer].join('\n'));
