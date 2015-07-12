# del-values [![npmjs.com][npmjs-img]][npmjs-url] [![The MIT License][license-img]][license-url] 

> Multiple delete deeply nested **values** from an object using dot notation `a.b.c`

[![code climate][codeclimate-img]][codeclimate-url] [![standard code style][standard-img]][standard-url] [![travis build status][travis-img]][travis-url] [![coverage status][coveralls-img]][coveralls-url] [![dependency status][david-img]][david-url]


## Install
```
npm i del-values --save
npm test
```


## Usage
> For more use-cases see the [tests](./test.js)

```js
var del = require('del-values')

del({a: 'b', c: {d: 'e', g: 'f'}}, 'a.d') //=> {a: 'b', c: {d: 'e', g: 'f'}}
del({a: 'b', c: {d: 'e', g: 'f'}, z: 'z'}, ['a', 'c.d']) //=> {c: {g: 'f' }, z: 'z'}
del({a: 'b', c: 'd'}, ['a', 'c']) //=> {}
```


## Related
- [assign-value](https://github.com/jonschlinkert/assign-value): Extend a value or deeply nested property of an object using object path notation.
- [del-value](https://github.com/tunnckocore/del-value): Delete deeply nested value from an object using dot notation like `a.b.c.x` and return the modified object if success, otherwise return original object.
- [get-value](https://github.com/jonschlinkert/get-value): Use property paths (`a.b.c`) to get a nested value from an object.
- [has-value](https://github.com/jonschlinkert/has-value): Returns true if a value exists, false if empty. Works with deeply nested values using object paths.
- [has-own-deep](https://github.com/jonschlinkert/has-own-deep): Returns true if an object has an own, nested property using dot notation paths ('a.b.c').
- [object.omit](https://github.com/jonschlinkert/object.omit): Return a copy of an object without the given key, or array of keys.
- [omit-value](https://github.com/jonschlinkert/omit-value): Omit properties from an object or deeply nested property of an object using object path notation.
- [put-value](https://github.com/tunnckocore/put-value): Update only existing values from an object, works with dot notation paths like `a.b.c` and support deep nesting.
- [set-value](https://github.com/jonschlinkert/set-value): Create nested values and any intermediaries using dot notation (`'a.b.c'`) paths.
- [store-cache](https://github.com/tunnckocore/store-cache): Simple and flexible API for in-memory object cache store that have set, get, put, del, has and store methods. Inspired by `option-cache`, `data-store`, `map-cache` and more.
- [upsert-value](https://github.com/doowb/upsert-value): Update or set nested values and any intermediaries with dot notation (`'a.b.c'`) paths.


## Contributing
Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/tunnckoCore/del-values/issues/new).  
But before doing anything, please read the [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines.


## [Charlike Make Reagent](http://j.mp/1stW47C) [![new message to charlike][new-message-img]][new-message-url] [![freenode #charlike][freenode-img]][freenode-url]

[![tunnckocore.tk][author-www-img]][author-www-url] [![keybase tunnckocore][keybase-img]][keybase-url] [![tunnckoCore npm][author-npm-img]][author-npm-url] [![tunnckoCore twitter][author-twitter-img]][author-twitter-url] [![tunnckoCore github][author-github-img]][author-github-url]


[npmjs-url]: https://www.npmjs.com/package/del-values
[npmjs-img]: https://img.shields.io/npm/v/del-values.svg?label=del-values

[license-url]: https://github.com/tunnckoCore/del-values/blob/master/LICENSE.md
[license-img]: https://img.shields.io/badge/license-MIT-blue.svg


[codeclimate-url]: https://codeclimate.com/github/tunnckoCore/del-values
[codeclimate-img]: https://img.shields.io/codeclimate/github/tunnckoCore/del-values.svg

[travis-url]: https://travis-ci.org/tunnckoCore/del-values
[travis-img]: https://img.shields.io/travis/tunnckoCore/del-values.svg

[coveralls-url]: https://coveralls.io/r/tunnckoCore/del-values
[coveralls-img]: https://img.shields.io/coveralls/tunnckoCore/del-values.svg

[david-url]: https://david-dm.org/tunnckoCore/del-values
[david-img]: https://img.shields.io/david/tunnckoCore/del-values.svg

[standard-url]: https://github.com/feross/standard
[standard-img]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


[author-www-url]: http://www.tunnckocore.tk
[author-www-img]: https://img.shields.io/badge/www-tunnckocore.tk-fe7d37.svg

[keybase-url]: https://keybase.io/tunnckocore
[keybase-img]: https://img.shields.io/badge/keybase-tunnckocore-8a7967.svg

[author-npm-url]: https://www.npmjs.com/~tunnckocore
[author-npm-img]: https://img.shields.io/badge/npm-~tunnckocore-cb3837.svg

[author-twitter-url]: https://twitter.com/tunnckoCore
[author-twitter-img]: https://img.shields.io/badge/twitter-@tunnckoCore-55acee.svg

[author-github-url]: https://github.com/tunnckoCore
[author-github-img]: https://img.shields.io/badge/github-@tunnckoCore-4183c4.svg

[freenode-url]: http://webchat.freenode.net/?channels=charlike
[freenode-img]: https://img.shields.io/badge/freenode-%23charlike-5654a4.svg

[new-message-url]: https://github.com/tunnckoCore/messages
[new-message-img]: https://img.shields.io/badge/send%20me-message-green.svg
