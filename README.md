# Canvas Gamepad
This library is basically a 5-button gamepad for touchscreens.

Once I wrote a [Tetris game](https://github.com/fish-liqueur/tetris) to practice Typescript and Canvas.
<br>
In Tetris, you need five buttons. Three arrows, turn the figure, and pause. While testing the game, I used the keyboard - classic. But what about mobile devices? They have touchscreens and don't have a keyboard.
<br>
Some mobile Tetris apps add completely different mechanics. E.g., you do not need to press "left" three times to move your figure three cells to the left. All you have to do is swipe left and stop your finger at the right place.
<br>
I have too much respect for the classics, and I wanted to keep the original mechanics. So I decided to make an on-screen keyboard.

Why Canvas? Because I wanted to have four buttons as four parts of a crisscrossed circle. HTML box model does not allow such liberties.

While developing this library, I use 🍰 [Feature sliced design](https://feature-sliced.design/) architectural methodology.

#### [Demo here](https://fish-liqueur.github.io/tetris/) (you should either open this link from a phone or tablet or you name it, or emulate touchscreen in your browser's DevTools).

## How to use
### 1. Add dependency
```js
npm install --save fish-liqueur/canvas-gamepad#master
```
### 2. Create a container
In your HTML template, create an empty container for the gamepad with some id. The container should have non-zero height and width. The gamepad will be rendered inside it. 
<br>
The gamepad element is square. So, if the container is not square, the size of the gamepad will be equal to the height or width of the container (whichever is smaller).
```html
<div id="controls" class="foo"></div>
```
### 3. Import and init
*styleOptions* is an optional parameter. If you skip it, the default style kit will be applied
```js
// ButtonStyleKit is a type for the style object
import { CanvasGamepad, ButtonStyleKit } from 'canvas-gamepad';

// First parameter (string) is the container's id
// Second parameter ((key: string) => void) is the callback function
// Third parameter is a style kit (optional)
new CanvasGamepad('controls', gamepadCallback, styleOptions);

// A function to handle button taps
function gamepadCallback(buttonKey: string): void {
    console.log(`The button ${buttonKey} has been clicked!`);
}

// This is the default style kit. 
const stypeOptions: ButtonStyleKit = {
    general: {
        shadowColor: 'transparent',
        shadowBlur: 0,
        strokeStyle: '#ff577d',
        lineWidth: 2,
    },
    active: {
        shadowColor: 'red',
        shadowBlur: 20,
        strokeStyle: 'red',
        lineWidth: 2,
    },
}
```
