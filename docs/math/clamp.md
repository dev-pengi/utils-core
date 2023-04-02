---
sidebar_position: 2
id: clamp
title: clamp
sidebar_label: clamp
---

The `clamp()` function clamps a value between a minimum and maximum value.

### Parameters

- `value` - (`Number`): The value to be clamped.
- `min` - (`Number`): The minimum value that **value** can be.
- `max` - (`Number`): The maximum value that **value** can be.

### Returns

- `Number`: The clamped value

### Throws

- `Error`: Will throw an error if **value**, **min**, or **max** is not a number.

### Example

> at velue that is less than **min**

```js
const utils = require('utils-core.js');
const current = 5;
const min = 10;
const max = 50;
const clampedValue = utils.math.clamp(current, min, max);
console.log(clampedValue);
//output: 10
```

> at velue that is greater than **max**

```js
const utils = require('utils-core.js');
const current = 100;
const min = 10;
const max = 50;
const clampedValue = utils.math.clamp(current, min, max);
console.log(clampedValue);
//output: 50
```