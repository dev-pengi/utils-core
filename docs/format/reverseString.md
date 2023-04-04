---
sidebar_position: 5
id: reverseString
title: reverseString
sidebar_label: reverseString
---

The `reverseString()` function reverses a string.
### Parameters

| Parameter | Type     | Description             |
| --------- | -------- | ----------------------- |
| `str`     | `String` | The string to reverse.  |

### Returns

- `String`: The reversed string

### Throws

- `Error`: If the `str` is not a valid string

### Example

```js
const utils = require('utils-core.js');
const str = 'hello world';
const reversed = utils.format.reverseString(str);
console.log(reversed); 
// 'dlrow olleh'
```
```js
const utils = require('utils-core.js');
const str = '123456';
const reversed = utils.format.reverseString(str);
console.log(reversed); 
// '654321'
```