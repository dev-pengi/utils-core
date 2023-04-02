---
sidebar_position: 2
id: MsToString
title: MsToString
sidebar_label: MsToString
---

The `MsToString()` function converts a number of milliseconds to a human readable time string.

### Parameters

- `milliseconds` (`Number`): The number of milliseconds to convert
- `seperator` (`String`): Seperates between units. set to `' ,'` by default

### Time units:
- `s`: second
- `m`: minute
- `h`: hour
- `d`: day
- `w`: week
- `mo`: month
- `y`: year

### Returns

- `String`: The time string

### Throws

- `Error`: If the input is not a number or is invalid

### Examples

> Using the default seperator:

```js
const utils = require('utils-core.js');
const msTime = 12345;
const convertedTime = utils.time.MsToString(msTime);
//Output: '1m'
```
```js
const utils = require('utils-core.js');
const msTime = 60000;
const convertedTime = utils.time.MsToString(msTime);
//Output: '1m'
```

> Using custom timeStamp: (`April 4th, 2022 at 12:00:00 AM UTC`)

```js
const utils = require('utils-core.js');
const msTime = 1649164800000;
const convertedTime = utils.time.MsToString(msTime);
//Output: '2mo, 2w, 3d, 12h, 30m, 23s'
```

> Using custom seperator:

```js
const utils = require('utils-core.js');
const msTime = 1649164800000;
const convertedTime = utils.time.MsToString(msTime, ' : ');
//Output: '2mo : 2w : 3d : 12h : 30m : 23s'
```
```js
const utils = require('utils-core.js');
const msTime = 1649164800000;
const convertedTime = utils.time.MsToString(msTime, ' and ');
//Output: '2mo and 2w and 3d and 12h and 30m and 23s'
```

> ms less than 1000:

```js
const utils = require('utils-core.js');
const msTime = 500;
const convertedTime = utils.time.MsToString(msTime);
//Output: '0.5s'
```



