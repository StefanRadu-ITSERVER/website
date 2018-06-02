# Vue.js vs Vanilla JS

Let's look at a comparison between **Vue.js** and **Vanilla JS** by making a simple `input` with an event handler that calls a method when the user presses `Enter`.

## Vanilla JS

We need an `input` element:

``` html
<input type="text">
```

Then, we need to write some Vanilla JS to get the `input`, add an event listener to it and check to see when the user presses the `Enter` key (its code is 13):

``` js
const inputName = document.querySelector('input');
inputName.addEventListener('keyup', function (e) {
  e.preventDefault();

  var key = e.keyCode;
  if (key === 13) {
    register();
  }
}, false);
```

So, when the `Enter` key is pressed, the event trigger calls the `register` function which just prints a message to the console:

``` js
function register(){
  console.log('registered');
}
```

## Vue.js

Now, it's Vue's turn.

We still need the `input` element, but this time we can call the `register` method directly on the `keyup` event and, surprisingly, on the `Enter` key only :astonished:

``` html
<input type="text" @keyup.enter="register">
```

And the `register` is not a function anymore, but it has to be added as a method:

``` js
var app = new Vue({
  el: '#app',
  data: {
  },
  methods: {
    register() {
      console.log('registered');
    }
  }
})
```

So, this is how it works. You can fire an event when the user presses `Enter`.

You can find the source code on [CodePen](https://codepen.io/danielsimi/pen/WJLvdd).
