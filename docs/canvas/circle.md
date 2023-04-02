---
sidebar_position: 1
id: circle
title: circle
sidebar_label: circle
---

The `circle()` function draws a circular clipping region on a canvas context.

### Parameters

- `ctx` (`CanvasRenderingContext2D`): The canvas rendering context to draw on.
- `x` (`number`): The x-coordinate of the center of the circle.
- `y` (`number`): The y-coordinate of the center of the circle.
- `width` (`number`): The width of the clipping region.
- `height` (`number`): The height of the clipping region.

### Return value

- `CanvasRenderingContext2D`: The canvas context with the new circular clipping region.

### Throws

- `Error`: Missing canvas context or invalid argument types.

### Example

```js
const { createCanvas, loadImage } = require('canvas');
const utils = require('utils-core.js');
const canvas = createCanvas(500, 500);
const ctx = canvas.getContext('2d');

// Draw a circle clipping region in the center of the canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.min(canvas.width, canvas.height) / 2;
ctx.save();
utils.canvas.circle(ctx, centerX - radius, centerY - radius, radius * 2, radius * 2);

// Draw an image that is clipped to the circle region
const image = await loadImage('myImage.png');
ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
ctx.restore();
```
:::info

this example uses await to wait for the request which means the code has to be inside an async function.

:::
### See also

- [CanvasRenderingContext2D.clip()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clip): The `clip()` method can be used to create arbitrary clipping regions on a canvas context.
- [CanvasRenderingContext2D.arc()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc): The `arc()` method is used to draw circular arcs on a canvas context.
