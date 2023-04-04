---
sidebar_position: 3
id: theNextDayOn
title: theNextDayOn
sidebar_label: theNextDayOn
---

The `theNextDayOn()` function gets the milliseconds timestamp of the next day.

### Parameters

| Parameter      | Description                                                      |
|----------------|------------------------------------------------------------------|
| `dayOffset`    | The number of days to calculate the timestamp for. Defaults to 1. |

### Returns

- `Number`: The milliseconds timestamp of the next day.

### Example

> with the default dayOffset:

```js
const utils = require('utils-core.js');
const tomorrowTimestamp = utils.time.theNextDayOn();
console.log(tomorrowTimestamp);
//Output: gives you the milliseconds timestamp for the next day.
```
> with a custom dayOffset:

```js
const utils = require('utils-core.js');
const tomorrowTimestamp = utils.time.theNextDayOn(7);
console.log(tomorrowTimestamp);
//Output: gives you the milliseconds timestamp for the next week's first day.
```


