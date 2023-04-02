---
sidebar_position: 5
id: chunk
title: chunk
sidebar_label: chunk
---

The `chunk()` function splits an array into chunks of a specified size.

### Parameters

- `arr` (`Array`): The array to chunk.
- `size` (`number`): The size of each chunk.

### Returns

- `Array`: An array of chunks.

### Throws

- `TypeError`: If `arr` is not an array.

### Example

```js
const utils = require('utils-core.js')
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const chunkedArray = utils.array.chunk(array, 3);
console.log(chunkedArray); // [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10]]
```

