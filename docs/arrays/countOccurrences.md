---
sidebar_position: 2
id: countOccurrences
title: countOccurrences
sidebar_label: countOccurrences
---

The `countOccurrences ()` function counts the number of occurrences of a value in an array..

### Parameters

| Parameter | Type | Description |
| --------- | ---- | ----------- |
| `arr`     | `Array` | The array to search for occurrences of `val`. |
| `val`     | `String` | The value to search for in the array. |

### Returns
- `Number`: The number of occurrences of `val` in `arr`.

### Throws
- `Error`: If `arr` is not an array.
### Example

```js
const utils = require('utils-core.js');
const arr = [1, 2, 3, 4, 1, 2, 1];
const val = 1;
const count = utils.arrays.countOccurrences(arr, val);
console.log(count); // Output: 3
```

### See also

- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
