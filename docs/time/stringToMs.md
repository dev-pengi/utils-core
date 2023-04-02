---
sidebar_position: 1
id: StringToMs
title: StringToMs
sidebar_label: StringToMs
---

The `StringToMs()` function converts a time string to milliseconds.

### Parameters

- `timeString` (`String`): The time string to convert

### Time units:
- `s`: second
- `m`: minute
- `h`: hour
- `d`: day
- `w`: week
- `M`: month
- `Y`: year

### Returns

- `Number`: The time in milliseconds

### Throws

- `Error`: If the time string is invalid

### Examples

> Convert a time string to milliseconds:

```js
const utils = require('utils-core.js')
const timeString = '1m';
const timeInMs = utils.time.StringToMs(timeString);
console.log(timeInMs) 
// output: 60000
```

```js
const utils = require('utils-core.js')
const timeString = '2M';
const timeInMs = utils.time.StringToMs(timeString); 
console.log(timeInMs) 
// output: 5184000000
```

> Use the time in milliseconds for a setTimeout:

```js
const utils = require('utils-core.js')
const timeString = '5s';
const timeInMs = utils.time,StringToMs(timeString);
setTimeout(() => {
  console.log('5 seconds have passed');
}, timeInMs);
```
