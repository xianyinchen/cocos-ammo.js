var Ammo = require('./builds/ammo');
global.Ammo = Ammo;

function assert (b, s) {
    s = s == null ? b : s;
    if (b) {
        console.log(s);
    } else {
        console.error('err:', s);
    }
}
global.assert = assert;

function assertEq (a, b, s) {
    if (a == b) {
        if (s == null) s = 'ok';
        console.log(s);
    } else {
        if (s == null) s = 'fail';
        console.error('err:', s);
    }
}
global.assertEq = assertEq;

function assertNeq (a, b, s) {
    if (a != b) {
        if (s == null) s = 'ok';
        console.log(s);
    } else {
        if (s == null) s = 'fail';
        console.error('err:', s);
    }
}
global.assertNeq = assertNeq;

global.print = console.log;

// require('./tests/basics');
// require('./tests/2');
// require('./tests/3');
// require('./tests/compoundShape');
// require('./tests/constraint');
// require('./tests/stress');
// require('./tests/testutils');
// require('./tests/userData');
require('./tests/wrapping');