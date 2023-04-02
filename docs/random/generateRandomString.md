---
sidebar_position: 3
id: generateRandomString
title: generateRandomString
sidebar_label: generateRandomString
---

The `generateRandomString()` function generate a random string with customizable options.

### Parameters

- `options` (`Objects`): The options for generating the random string
  - `includeNumbers` (`Boolean`): Whether to include numbers in the generated string. Defaults to `true`.
  - `includeSymbols` (`Boolean`): Whether to include symbols in the generated string. Defaults to `false`.
  - `length` (`Number`): The length of the generated string. Defaults to `10`.
  - `secure` (`Boolean`): Whether to use cryptographically secure random number generator. Defaults to `false`.
  - `prefix` (`String`): A prefix to add to the beginning of the generated string. Defaults to an empty string.
  - `suffix` (`String`): A suffix to add to the end of the generated string. Defaults to an empty string.
  - `capitalize` (`Boolean`): Whether to capitalize the first character of the generated string. Defaults to `false`.
  - `lowercase` (`Boolean`): Whether to convert the generated string to lowercase. Defaults to `false`.
  - `uppercase` (`Boolean`): Whether to convert the generated string to uppercase. Defaults to `false`.

### Returns

- `String`: The generated random string

### Throws

- `Error`: If an invalid option is passed

### Examples

> Generate a random string with default options:

```js
const utils = require('utils-core.js');
const randomString = utils.random.generateRandomString();
console.log(randomString); 
//Output: for example: "xrp9F7YU6S"
```

> Generate a random string with a length of 20:

```js
const utils = require('utils-core.js');
const options = {
  length: 20,
};

const randomString = utils.random.generateRandomString(options);
console.log(randomString); 
//Output: for example: "ac9J7Q2d8v3V3m4w6PKB"
```

> Generate a random string with a prefix and suffix

```js
const utils = require('utils-core.js');
const options = {
    prefix: 'user_',
    suffix: '_pass',
};

const randomString = utils.random.generateRandomString(options);
console.log(randomString); 
//Output: for example: "user_yrP5tT9V7T_pass"
```

> Generate a random string with symbols included

```js
const utils = require('utils-core.js');
const options = {
    includeSymbols: true,
};

const randomString = utils.random.generateRandomString(options);
console.log(randomString); 
//Output: for example: "rN;cE|aT/l"
```

> Generate a random string with numbers and symbols included, capitalized, and with a length of 5:

```js
const utils = require('utils-core.js');
const options = {
    includeNumbers: true, 
    includeSymbols: true,
    capitalize: true,
    length: 5,
};

const randomString = utils.random.generateRandomString(options);
console.log(randomString); 
//Output: for example: "Q3@D6"
```

> Generate a cryptographically secure random string with a length of 50:

```js
const utils = require('utils-core.js');
const options = {
    secure: true,
    length: 50,
};

const randomString = utils.random.generateRandomString(options);
console.log(randomString); 
//Output: for example: "Zl*<C7V8?pT0X1DyOx%mHgPbM#RUS$|]kwQ2)N!a3@f"
```

> Generate a random string in lowercase:

```js
const utils = require('utils-core.js');
const options = {
    lowercase: true,
};

const randomString = utils.random.generateRandomString(options);
console.log(randomString); 
//Output: for example: "ehtkzvlyns"
```

> Generate a random string in uppercase:

```js
const utils = require('utils-core.js');
const options = {
    uppercase: true,
};

const randomString = utils.random.generateRandomString(options);
console.log(randomString); 
//Output: for example: "YQJFZDGESM"
```