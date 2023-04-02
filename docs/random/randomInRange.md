---
sidebar_position: 1
id: randomInRange
title: randomInRange
sidebar_label: randomInRange
---

The `randomInRange()` function Generates a random number within a given range.
### Parameters

- `min` (`Number`): The minimum value of the range
- `max` (`Number`): The maximum value of the range

### Returns

- `Number`: A random number within the given range

### Throws

- `Error`: if one of or both the arguments aren't a valid numbers
- `Error`: if the maximum value is less than the minimum value

### Example

```js
const utils = require('utils-core.js');
const randomInt = randomInRange(1, 10);
console.log(randomInt);
// Output: a random integer between 1 and 10, for example: 4
```
```js
const utils = require('utils-core.js');
const randomInt = randomInRange(1900, 2023);
console.log(randomInt);
// Output: a random integer between 1900 and 2023, for example: 1945
```

### See also
- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random) - Returns a random number between 0 and 1.
