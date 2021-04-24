# Animation and Gesture
## Animation with JavaScript
1. setInterval (16ms per frame 1000/60fps)
```js
setInterval(()=>{}, 16)
```
2. set time out - only runs one time
```js
let tick = ()=>{
    setTimeOut(tick, 16)
}
```
3. requestAnimationFrame, cancelAnimationFrame
```js
let tick = ()=>{
    let handler = requestAnimationFrame(tick)
    cancelAnimationFrame(handler);
}
```

# Mouse events and touch events
## Mouse events
- mousedown, mousemove, mouseup
- event.buttons (5 integer values (left, right, middle button ...))

## Touch events
- touchstart, touchmove, touchcancel, touchend
