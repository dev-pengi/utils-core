---
sidebar_position: 1
id: extract
title: extract
sidebar_label: extract
---

The `extract()` function takes an array of objects and a key as arguments and returns an array containing the values of the specified key from each object in the input array.
### Parameters
- `arr` (`Array`): The array of objects to extract values from.
- `key` (`string`): The name of the key to extract values for.

### Returns
- `Array`: An array with the extracted values.

### Throws
- `Error`: If the array is empty or undefined, or if the key is not a string or is an empty string.

### Example

```js
const utils = require('utils-core.js');
const data = [
  { id: 1, name: "sif", age: 30 },
  { id: 2, name: "Jane", age: 25 },
  { id: 3, name: "Bob", age: 40 },
];

const names = utils.arrays.extract(data, "name");

console.log(names); // ["sif", "Jane", "Bob"]
```

### See also

- [Array.prototype.filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
- [Array.prototype.reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.prototype.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
