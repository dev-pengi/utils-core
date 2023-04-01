---
sidebar_position: 6
id: incluesArray
title: incluesArray
sidebar_label: incluesArray
---

The `incluesArray()` function checks if an array includes at least one item of another array.

### Parameters

- `array1` (`Array`): The first array to check
- `array2` (`Array`): The second array to check

### Returns

- `Boolean`: True if array2 includes at least one item from array1, false otherwise.

### Throws

- `TypeError`: If either parameter is not an array

### Examples
> match case

```javascript
const utils = require('utils-core.js');
const array1 = [1, 2, 3];
const array1 = [3, 4, 5];

const checkIncludes = utils.array.incluesArray(array1, array2)
//output: true
```

> unmatch case

```javascript
const utils = require('utils-core.js');
const array1 = [1, 2, 3];
const array1 = [4, 5, 6];

const checkIncludes = utils.array.incluesArray(array1, array2)
//output: false
```