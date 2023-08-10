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

### Complete version and demo coming soon
