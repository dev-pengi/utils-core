---
sidebar_position: 4
id: gamble
title: gamble
sidebar_label: gamble
---

The `gamble()` function simulates a gambling game by returning true or false based on a given win percentage.

### Parameters

| Parameter     | Type     | Description                                                      |
|---------------|----------|------------------------------------------------------------------|
| `percentage`  | `Number` | The win percentage (between 0 and 100).                            |

### Returns

- `Boolean`: True if the player wins, false otherwise

### Throws

- `Error`: if the `percentage` value is invalid

### Example

```js
const utils = require('utils-core.js');
const winChance = 50; // 50% win chance
if (utils.random.gamble(winChance)) {
    console.log("Congratulations! You won!");
} else {
    console.log("Sorry, you lost.");
}
```

```js
const utils = require('utils-core.js');
const winChance = 20; // 20% win chance
if (utils.random.gamble(winChance)) {
    console.log("Congratulations! You won!");
} else {
    console.log("Sorry, you lost.");
}
```