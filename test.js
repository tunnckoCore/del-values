/*!
 * del-values <https://github.com/tunnckoCore/del-values>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

/* jshint asi:true */

'use strict'

var test = require('assertit')
var del = require('./index')

test('del-values:', function () {
  test('should return empty object of not object given', function (done) {
    test.deepEqual(del(1234, 'a'), {})
    done()
  })
  test('should works like `del-value` with single property path', function (done) {
    var actual = {a: 'b', c: {d: 'e', g: 'f'}}
    var expected = {c: {d: 'e', g: 'f'}}
    test.deepEqual(del(actual, 'a'), expected)

    var obj = {a: 'b', c: {d: 'e', g: 'f'}}
    var expect = {a: 'b', c: {d: 'e'}}
    test.deepEqual(del(obj, 'c.g'), expect)
    done()
  })
  test('should support array of property paths', function (done) {
    var actual = {a: {b: {c: 'ddd'}, e: 'ee'}, foo: 'bar', baz: {qux: 'dad', w: 'www'}}
    var expected = {a: {e: 'ee'}, baz: {w: 'www'}}

    test.deepEqual(del(actual, ['a.b', 'foo', 'baz.qux']), expected)
    test.deepEqual(del(actual, ['a.b', 'a.e', 'foo', 'baz.qux', 'baz.w']), {a: {}, baz: {}})
    test.deepEqual(del(actual, ['a.b', 'a.e', 'foo', 'baz']), {a: {}})
    done()
  })
})
