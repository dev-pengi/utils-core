---
sidebar_position: 3
id: getAverage
title: getAverage
sidebar_label: getAverage
---

The `getAverage()` function calculates the average of an array of numbers.

### Parameters

- `nums` (`Array`): The array of numbers to calculate the average for

### Returns

- `Number`: The average of the numbers in the array

### Throws

- `Error`: The argument must be an array. The array must contain at least one element.

### Example

```javascript
const utils = require('utils-core.js');
const arrayOfNumbers = [1, 2, 3];
const average = utils.math.getAverage(arrayOfNumbers)
console.log(average);
//output: 2
```

