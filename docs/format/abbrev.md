---
sidebar_position: 1
id: abbrev
title: abbrev
sidebar_label: abbrev
---

The `abbrev()` function abbreviates a large number with a letter suffix.

### Parameters

| Parameter | Type     | Description                 |
| --------- | -------- | --------------------------- |
| `num`     | `Number` | The number to abbreviate.    |


### Returns

- `String`: The abbreviated string

### Examples

```js
const utils = require('utils-core.js');
const num = 1500;
const abbreviatedNum = utils.format.abbrev(num);
console.log(abbreviatedNum); 
// output: "1.5K"
```
```js
const utils = require('utils-core.js');
const num = "987654321";
const abbreviatedNum = utils.format.abbrev(num);
console.log(abbreviatedNum); 
// output: "988M"
```
```js
const utils = require('utils-core.js');
const num = "2500000000";
const abbreviatedNum = utils.format.abbrev(num);
console.log(abbreviatedNum); 
// output: "2.5b"
```
