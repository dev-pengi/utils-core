---
sidebar_position: 2
id: getRandomItem
title: getRandomItem
sidebar_label: getRandomItem
---

The `getRandomItem()` function returns a random item from an array.
### Parameters

| Parameter     | Type     | Description                                                      |
|---------------|----------|------------------------------------------------------------------|
| `arr`         | `Array`  | The array to select a random item from.                           |

### Returns

- `Any`: A random item from the input array

### Throws

- `Error`: If the input is not an array or if the array is empty

### Example

```js
const utils = require('utils-core.js');
const languages = ['javascript', 'python', 'html', 'css', 'c++'];
const randomItem = utils.random.getRandomItem(languages);
console.log(randomItem); // 'c++', for example

const numbers = [1, 2, 3, 4, 5, 6];
const randomNumber = utils.random.getRandomItem(numbers);
console.log(randomNumber); // 4, for example
```

### See Also
- [randomInRange](/docs/random/randomInRange): Generates a random number within a given range.
- [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random): Returns a random number between 0 (inclusive) and 1 (exclusive).
