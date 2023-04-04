---
sidebar_position: 1
id: match
title: match
sidebar_label: match
---

The `match()` function checks if a string matches a regular expression of a specified type.

### Parameters

| Parameter        | Type          | Description                                                      |
|------------------|---------------|------------------------------------------------------------------|
| `str`            | `String`      | The string to match against the regular expression.              |
| `param`          | `RegexType`   | The type of regular expression to match against.                  |

### Returns

- `Boolean`: `true` if the entire string matches the regular expression, `false` otherwise

### Throws

- `Error`: If the `type` argument is not one of the types specified in the `regexs` array

### Regex types

| Parameter        | Description                                             |
|------------------|---------------------------------------------------------|
| `email`          | Matches a valid email address.                          |
| `url`            | Matches a valid URL.                                     |
| `credit-card`    | Matches a valid credit card number.                      |
| `ip-address`     | Matches a valid IPv4 address.                            |
| `postal-code`    | Matches a valid postal code.                             |
| `password`       | Matches a password that contains at least one uppercase letter, one lowercase letter, one digit, and one special character, and is at least 8 characters long. |
| `username`       | Matches a valid username that consists of alphanumeric characters, dots, underscores, and hyphens, and is at least 3 characters long. |
| `time`           | Matches a valid time in the format HH:MM.                |
| `hashtag`        | Matches a valid hashtag that starts with # and contains only alphanumeric characters. |

### Example

> Email matching

```js
const utils = require('utils-core.js');

const email = 'sif@sifedine.lol';
const isValidEmail = utils.regex.match(email, 'email');
console.log(isValidEmail); 
//Output: true
```

> Url matching

```js
const utils = require('utils-core.js');

const url = 'https://www.sifedine.lol';
const isValidUrl = utils.regex.match(url, 'url');
console.log(isValidUrl); 
//Output: true
```

> Credit card matching

```js
const utils = require('utils-core.js');

const cc = '4111111111111111';
const isValidCc = utils.regex.match(cc, 'credit-card
console.log(isValidCc);');
//Output: true
```

> Ip address v4 matching

```js
const utils = require('utils-core.js');

const ipAddress = '192.0.2.1';
const isValidIpAddress = utils.regex.match(ipAddress, 'ip-address
console.log(isValidIpAddress);-v4');
//Output: true
```

> Password matching

```js
const utils = require('utils-core.js');

const password = 'Password1!';
const isValidPassword = utils.regex.match(password, 'password');
console.log(isValidPassword);
//Output: true
```

> Username matching

```js
const utils = require('utils-core.js');

const username = 'john.doe';
const isValidUsername = utils.regex.match(username, 'username');
console.log(isValidUsername);
//Output: true
```

> Time matching

```js
const utils = require('utils-core.js');

const time = '18:30';
const isValidTime = utils.regex.match(time, 'time');
console.log(isValidTime);
//Output: true
```

> Hashtag matching

```js
const utils = require('utils-core.js');

const hashtag = '#example';
const isValidHashtag = utils.regex.match(hashtag, 'hashtag');
console.log(isValidHashtag);
//Output: true
```


### See also
- [Regular expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions): Documents for regular expressions and how it works.
- [RegExr](https://regexr.com/): Regular expression tester with syntax highlighting.
