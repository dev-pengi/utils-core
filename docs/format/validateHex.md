---
sidebar_position: 4
id: validateHex
title: validateHex
sidebar_label: validateHex
---

The `validateHex()` function validates a hexadecimal color code string.
### Parameters

- `hex` (`String`): The input hexadecimal color code to be validated

### Returns

- `Boolean`: `true` if `hex` is valid, `false` otherwise

### Throws

- `Error`: If `hex` is not a string

### Examples

> Valid hexes:

```js
const utils = require('utils-core.js');
const hex = '#00F';
const validate = utils.format.validateHex(hex);
//Output: true
```
```js
const utils = require('utils-core.js');
const hex = '#FF0000';
const validate = utils.format.validateHex(hex);
//Output: true
```
```js
const utils = require('utils-core.js');
const hex = '#00F';
const validate = utils.format.validateHex(hex);
//Output: true
```

> Invalid hexes:

```js
const utils = require('utils-core.js');
const hex = '#xy12z4';
const validate = utils.format.validateHex(hex);
//Output: false
```
```js
const utils = require('utils-core.js');
const hex = '#invalid';
const validate = utils.format.validateHex(hex);
//Output: false
```