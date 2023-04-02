---
sidebar_position: 1
id: match
title: match
sidebar_label: match
---

The `match()` function checks if a string matches a regular expression of a specified type.

### Parameters

- `str` (`String`): The string to match
- `param` ([RegexType](#regex-types)): The type of regular expression to match against

### Returns

- `Boolean`: `true` if the entire string matches the regular expression, `false` otherwise

### Throws

- `Error`: If the `type` argument is not one of the types specified in the `regexs` array

### Regex types

- `email`: Matches a valid email address.
- `url`: Matches a valid URL.
- `credit-card`: Matches a valid credit card number.
- `ip-address-v4`: Matches a valid IPv4 address.
- `postal-code`: Matches a valid postal code.
- `password`: Matches a password that contains at least one uppercase letter, one lowercase letter, one digit, and one special character, and is at least 8 characters long.
- `username`: Matches a valid username that consists of alphanumeric characters, dots, underscores, and hyphens, and is at least 3 characters long.
- `time`: Matches a valid time in the format HH:MM.
- `hashtag`: Matches a valid hashtag that starts with # and contains only alphanumeric characters.

### Example

> Email matching

```js
const utils = require('utils-core.js')

const email = 'sif@sifedine.lol';
const isValidEmail = utils.regex.match(email, 'email'); 
//Output: true
```

> Url matching

```js
const utils = require('utils-core.js')

const url = 'https://www.sifedine.lol';
const isValidUrl = utils.regex.match(url, 'url'); 
//Output: true
```

> Credit card matching

```js
const utils = require('utils-core.js')

const cc = '4111111111111111';
const isValidCc = utils.regex.match(cc, 'credit-card');
//Output: true
```
