---
sidebar_position: 7
id: capitalize
title: capitalize
sidebar_label: capitalize
---

The `capitalize()` function capitalizes the first letter of a string.
### Parameters

- `str` (`String`): The string to be capitalized

### Returns

- `String`: The capitalized string

### Throws

- `Error`: if `str` is not a valid string

### Example

```js
const utils = require('utils-core.js')
const str = 'coding is awesome';
const check = utils.format.capitalize(str);
console.log(check);
//Output: Coding is awesome
```
```js
const utils = require('utils-core.js')
const str = 'javascript';
const check = utils.format.capitalize(str);
console.log(check);
//Output: Javascript
```
