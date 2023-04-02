---
sidebar_position: 3
id: formatHex
title: formatHex
sidebar_label: formatHex
---

The `formatHex()` function Formats a hexadecimal color code string by adding a "#" prefix if it's missing and expanding short-form hex codes to long-form.

### Parameters

- `hex` (`String`): The input hexadecimal color code to be formatted.
- `alt` (`String`): The default color code to use if `hex` is invalid, set to `#000000` by default.

### Returns

- `String`: The formatted color code

### Throws

- `Error`: If `hex` is not a string or `alt` is not a string

### Example

```js
const utils = require('utils-core.js')
const hex = "f00";
const formattedHex = utils.format.formatHex(hex);
console.log(formattedHex); 
// output: "#ff0000"
```
```js
const utils = require('utils-core.js');
const hex = "00ff00";
const formattedHex = utils.format.formatHex(hex, "#000000");
console.log(formattedHex); 
// output: "#00ff00"
```