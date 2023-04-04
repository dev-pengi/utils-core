---
sidebar_position: 4
id: shuffle
title: shuffle
sidebar_label: shuffle
---

The `shuffle()` function shuffles an array in place using the Fisher-Yates shuffle algorithm.

### Parameters

| Parameter | Type    | Description                                |
| --------- | ------- | ------------------------------------------ |
| `arr`     | `Array` | The input array to be shuffled randomly.   |

### Returns

- `Array`: The shuffled array.

### Throws

- `Error`: If `arr` is not an array.

### Example

```js
const utils = require('utils-core.js');
const arr = [1, 2, 3, 4, 5];
const shuffledArr = utils.arrays.shuffle(arr);
console.log(shuffledArr); // [3, 2, 1, 5, 4]
```