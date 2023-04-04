---
sidebar_position: 2
id: merge
title: merge
sidebar_label: merge
---

The `mergeObjects()` function merges two or more objects into a new object.

### Parameters

| Parameter  | Type     | Description                             |
|------------|----------|-----------------------------------------|
| `objects`  | `Object` | The objects to merge.                    |

### Returns

- `Object`: The merged object.

### Examples

> Merging two objects

```js
const utils = require('utils-core.js');
const object1 = {
  name: "sif",
  age: 30,
  hobbies: ["reading", "running"]
};

const object2 = {
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  },
  contact: {
    email: "sif@sifedine.lol",
    phone: "555-1234"
  }
};

const mergedObj = utils.objects.mergeObjects(object1, object2);

console.log(mergedObj);

// Output: {
//   name: "sif",
//   age: 30,
//   hobbies: ["reading", "running"],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: "NY"
//   },
//   contact: {
//     email: "sif@sifedine.lol",
//     phone: "555-1234"
//   }
// }
```

> Merging three objects

```js
const utils = require('utils-core.js');
const object1 = {
  name: "sif",
  age: 30,
  hobbies: ["reading", "running"]
};

const object2 = {
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  }
};

const object3 = {
  contact: {
    email: "sif@sifedine.lol",
    phone: "555-1234"
  }
};

const mergedObj = utils.objects.mergeObjects(object1, object2, object3);

console.log(mergedObj);

// Output: {
//   name: "sif",
//   age: 30,
//   hobbies: ["reading", "running"],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: "NY"
//   },
//   contact: {
//     email: "sif@sifedine.lol",
//     phone: "555-1234"
//   }
// }
```
:::info

when merging objects with overlapping keys (keys that exists in two or more objects), the last objects with the key will overrides the ones before it.

> For example merging two objects that has **age** key:

```js
const utils = require('utils-core.js');
const object1 = {
  name: "sif",
  age: 30,
  hobbies: ["reading", "running"]
};

const object2 = {
  age: 35,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  },
  contact: {
    email: "sif@sifedine.lol",
    phone: "555-1234"
  }
};

const mergedObj = utils.objects.mergeObjects(object1, object2);

console.log(mergedObj);

// Output: {
//   name: "sif",
//   age: 35, // value from object2 overwrites value from object1
//   hobbies: ["reading", "running"],
//   address: {
//     street: "123 Main St",
//     city: "New York",
//     state: "NY"
//   },
//   contact: {
//     email: "sif@sifedine.lol",
//     phone: "555-1234"
//   }
// }
```
### In this example we have:
- The age value from `object2` overwrites value from `object1`


> Merging three objects with overlapping keys:

```js
const utils = require('utils-core.js');
const object1 = {
  name: "Alice",
  age: 30,
  hobbies: ["reading", "yoga"],
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY"
  }
};

const object2 = {
  age: 35,
  hobbies: ["running", "swimming"],
  address: {
    street: "456 Elm St",
    city: "Boston",
    state: "MA",
    zip: "02115"
  }
};

const object3 = {
  name: "Bob",
  hobbies: ["painting"],
  address: {
    city: "San Francisco"
  }
};

const mergedObj = utils.objects.mergeObjects(object1, object2, object3);

console.log(mergedObj);

// Output: {
//   name: "Bob",
//   age: 35, // 
//   hobbies: ["painting"],
//   address: {
//     street: "456 Elm St",
//     city: "San Francisco",
//     state: "MA",
//     zip: "02115"
//   }
// }
```
### In this example we have:
- The name value from `object3` overwrites value from `object1`
- The age value from `object2` overwrites value from `object1`
- The hobbies value from `object3` overwrites value from `object2`, which overwrote value from `object1`
- The street value from `object2` overwrites value from `object1`
- The city value from `object2` overwrites value from `object1`
- The city value from `object3` overwrites value from `object1`
- The state value from `object2` overwrites value from `object1`
- The zip value from `object2`
:::