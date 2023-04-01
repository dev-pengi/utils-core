---
sidebar_position: 1
id: flatten
title: flatten
sidebar_label: flatten
---

The `flattenObject()` function flattens an object with nested properties into a flat object with path keys

### Parameters

- `obj` (`Object`): The object to flatten
- `prefix` (`String`): The prefix to use for the path keys. set to `""` by default

### Returns

- `Object`: The flattened object

### Throws

- `Error`: If the input is not an object

### Examples

> Simple object with no nested properties:

```javascript
const utils = require('utils-core.js')

const obj = {
  name: "sif",
  age: 30,
  city: "New York"
};

const flattenedObj = utils.objects.flattenObject(obj);
console.log(flattenedObj);
// Output: {
//   "name": "sif",
//   "age": 30,
//   "city": "New York"
// }
```

> Object with nested properties:

```javascript
const utils = require('utils-core.js')
const obj = {
  name: "sif",
  age: 30,
  address: {
    street: "456 Main St",
    city: "New York",
    state: "NY"
  }
};

const flattenedObj = utils.objects.flattenObject(obj);
console.log(flattenedObj);
// Output: {
//   "name": "sif",
//   "age": 30,
//   "address.street": "456 Main St",
//   "address.city": "New York",
//   "address.state": "NY"
// }
```

> Object with arrays:

```javascript
const utils = require('utils-core.js')

const obj = {
  name: "sif",
  age: 30,
  hobbies: ["reading", "running", "coding"],
  address: {
    street: "456 Main St",
    city: "New York",
    state: "NY"
  }
};

const flattenedObj = utils.objects.flattenObject(obj);
console.log(flattenedObj);
// Output:
// {
//   "name": "sif",
//   "age": 30,
//   "hobbies.0": "reading",
//   "hobbies.1": "running",
//   "hobbies.2": "coding",
//   "address.street": "456 Main St",
//   "address.city": "New York",
//   "address.state": "NY"
// }
```

> Object with null or undefined values:

```javascript
const utils = require('utils-core.js')

const obj = {
  name: "sif",
  age: null,
  address: {
    street: "456 Main St",
    city: null,
    state: "NY"
  }
};

const flattenedObj = utils.objects.flattenObject(obj);
console.log(flattenedObj);
// Output: {
//   "name": "sif",
//   "age": null,
//   "address.street": "456 Main St",
//   "address.city": null,
//   "address.state": "NY"
// }
```

> Object with all ofthe above

```javascript
const utils = require('utils-core.js')

const obj = {
  name: "sif",
  age: 30,
  hobbies: ["reading", "running", "coding"],
  address: {
    street: "456 Main St",
    city: null,
    state: "NY"
  },
  contact: {
    email: "sif@example.com",
    phone: {
      home: "555-4564",
      work: "555-5678"
    }
  },
  isMarried: false,
  spouse: undefined,
  notes: {
    first: "Likes to read mystery novels",
    second: "Runs 5 miles every day"
  }
};

const flattenedObj = utils.objects.flattenObject(obj);
console.log(flattenedObj);
// Output:
// {
//   "name": "sif",
//   "age": 30,
//   "hobbies.0": "reading",
//   "hobbies.1": "running",
//   "hobbies.2": "coding",
//   "address.street": "456 Main St",
//   "address.city": null,
//   "address.state": "NY",
//   "contact.email": "sif@example.com",
//   "contact.phone.home": "555-4564",
//   "contact.phone.work": "555-5678",
//   "isMarried": false,
//   "spouse": undefined,
//   "notes.first": "Likes to read mystery novels",
//   "notes.second": "Runs 5 miles every day"
// }
```
