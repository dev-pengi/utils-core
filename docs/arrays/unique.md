---
sidebar_position: 3
id: unique
title: unique
sidebar_label: unique
---

The `unique()` function removes duplicates from an array.

### Parameters

| Parameter | Type    | Description                                  |
| --------- | ------- | -------------------------------------------- |
| `arr`     | `Array` | The array to remove duplicate elements from.  |


### Returns

- `Array`: A new array with duplicates removed.

### Throws

- `Error`: If the `arr` parameter is not an array.


```js
const utils = require('utils-core.js');
const arr = [1, 2, 3, 2, 4, 1];
const uniqueArr = utils.arrays.unique(arr);
console.log(uniqueArr); // [1, 2, 3, 4]
```