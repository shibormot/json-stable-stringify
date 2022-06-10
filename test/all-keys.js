var test = require('tape');
var stringify = require('../');

test('all keys', function (t) {
    t.plan(1);
    var parent = { a: 1 };
    var child = Object.create(parent);
    child.b = 2;
    t.equal(stringify(child, {allKeys: true}), '{"a":1,"b":2}');
});
