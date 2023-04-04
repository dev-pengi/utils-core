---
sidebar_position: 6
id: isPalindrome
title: isPalindrome
sidebar_label: isPalindrome
---

The `isPalindrome()` function determines whether a string is a palindrome **(the string is the same whether it's normal or reversed)**.

### Parameters

| Parameter | Type     | Description                    |
| --------- | -------- | ------------------------------ |
| `str`     | `String` | The string to check.           |


### Returns

- `Boolean`: True if the string is a palindrome, false otherwise

### Throws

- `Error`:

### Example

```js
const utils = require('utils-core.js');
const str = 'racecar';
const check = utils.format.isPalindrome(str);
console.log(check);
//Output: true
```
```js
const utils = require('utils-core.js');
const str = 'Was it a car or a cat i saw?';
const check = utils.format.isPalindrome(str);
console.log(check);
//Output: true
```
```js
const utils = require('utils-core.js');
const str = 'not a palindrome';
const check = utils.format.isPalindrome(str);
console.log(check);
//Output: false
```
