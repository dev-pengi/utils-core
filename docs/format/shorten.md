---
sidebar_position: 2
id: shorten
title: shorten
sidebar_label: shorten
---

The `shorten()` function returns a shortened version of a string if its length is greater than the specified limit..
### Parameters

| Parameter | Type     | Description                                       |
| --------- | -------- | ------------------------------------------------- |
| `text`    | `String` | The text to shorten.                              |
| `len`     | `Number` | The maximum length of the shortened text, in chars.|

### Returns

- `String`: The shortened text with ellipsis added to the end

### Throws

- `Error`: If the `text` argument is not a string, or the `len` argument is not a positive integer

### Example

```js
const utils = require('utils-core.js');
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
const shortenedText = utils.format.shorten(text, 20);
console.log(shortenedText); 
// output: "Lorem ipsum dolor si..."
```


:::info
if the passed text is shorter than the lengththe function will return the text with no modifications:

```js
const utils = require('utils-core.js');
const text = "This is a short text.";
const shortenedText = utils.format.shorten(text, 50);
console.log(shortenedText); 
// output: "This is a short text."
```
:::