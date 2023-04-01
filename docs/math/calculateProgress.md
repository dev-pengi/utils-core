---
sidebar_position: 1
id: calculateProgress
title: calculateProgress
sidebar_label: calculateProgress
---

The `calculateProgress()` function calculates the progress made towards a goal, given the current progress.

### Parameters

- `current` (`Number`): The current progress towards the goal.
- `goal` (`Number`): The required progress towards the goal.

### Returns

- `Number`: The progress made towards the goal, as a percentage between 0 and 1.

### Throws

- `Error`: Will throw an error if the current or goal values are not numbers or are negative.

### Example

```javascript
const utils = require('utils-core.js');
const current = 345;
const required = 1000;
const progress = utils.math.calculateProgress(current, required);
console.log(progress);
//output: 0.34
```