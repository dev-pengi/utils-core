---
sidebar_position: 4
id: normalizeValues
title: normalizeValues
sidebar_label: normalizeValues
---

The `normalizeValues()` function normalizes an array of numbers so that they fall within a specific range.

### Parameters

- `nums` (`Array`): The array of numbers to normalize
- `min` (`Number`): The minimum value of the new range, it's set to 0 by default
- `max` (`Number`): The maximum value of the new range, it's set to 1 by default

### Returns

- `Array`: The normalized array of numbers

### Throws

- `Error`: If the input is not an array or if the array is empty
- `Error`: If min is greater than or equal to max

### Example

> using the default range: [0, 1]

```js
const utils = require('utils-core.js')
const nums = [10, 20, 30, 40, 50];
const normalized = utils.math.normalizeValues(nums);
console.log(normalized);
// output: [0, 0.25, 0.5, 0.75, 1]
```

> using the range: [10, 50]

```js
const utils = require('utils-core.js')
const nums = [10, 20, 30, 40, 50];
const min = 10;
const max = 50;
const normalized = normalizeValues(nums, min, max);
console.log(normalized);
// output: [10, 18, 26, 34, 42]
```
