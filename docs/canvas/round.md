---
sidebar_position: 2
id: round
title: round
sidebar_label: round
---

The `round()` function draws a circular clipping region on a canvas context.

### Parameters

- `ctx` (`CanvasRenderingContext2D`): The canvas rendering context to draw on.
- `x` (`number`): The x-coordinate of the top-left corner of the rectangle.
- `y` (`number`): The y-coordinate of the top-left corner of the rectangle.
- `width` (`number`): The width of the rectangle.
- `height` (`number`): The height of the rectangle.
- `radius` (`number or boolean, optional`): The radius of the corners, or true for a default 

### Return value

- (`CanvasRenderingContext2D`): The canvas context with the rounded rectangle drawn on it.
- 
### Throws

- `Error`: Missing canvas context or invalid argument types.

### Example

```javascript
const { createCanvas, loadImage } = require('canvas');
const canvas = createCanvas(500, 500);
const ctx = canvas.getContext('2d');

// Draw a rounded rectangle clipping region in the center of the canvas
const centerX = canvas.width / 2;
const centerY = canvas.height / 2;
const radius = Math.min(canvas.width, canvas.height) / 4;
ctx.save();
round(ctx, centerX - radius, centerY - radius, radius * 2, radius * 2, 10);

// Draw an image that is clipped to the rounded rectangle region
const image = await loadImage('myImage.png');
ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
ctx.restore();
```
:::info

this example uses await whice means the code has to be inside an async function .

:::
### See also

- [CanvasRenderingContext2D.clip()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/clip): The `clip()` method can be used to create arbitrary clipping regions on a canvas context.
- [CanvasRenderingContext2D.arc()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc): The `arc()` method is used to draw circular arcs on a canvas context.
