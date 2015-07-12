/*!
 * del-values <https://github.com/tunnckoCore/del-values>
 *
 * Copyright (c) 2015 Charlike Mike Reagent <@tunnckoCore> (http://www.tunnckocore.tk)
 * Released under the MIT license.
 */

'use strict'

var isObject = require('isobject')
var del = require('del-value')

module.exports = function delValues (obj, keys, esc) {
  if (!isObject(obj)) {
    return {}
  }
  keys = Array.isArray(keys) ? keys : [keys]

  var len = keys.length
  var i = 0

  while (i < len) {
    var key = keys[i++]
    del(obj, key, esc)
  }
  return obj
}
