# Array Destructuring

Let's get to know array destructuring in JavaScript :smile:

We have here an array of colors:

``` js
var colors = ['green', 'purple', 'white'];
```

Now, we might want to have the values of the array as individual, named variables.

We would do something like this:

``` js
var firstColor = colors[0];
var secondColor = colors[1];
var thridColor = colors[2];

console.log(firstColor);
console.log(secondColor);
console.log(thridColor);
```

And this works fine, but wouldn't be easier if the indexes were left out and still being able to name our variables?

Well, yes!

``` js
var [
  firstColor,
  secondColor,
  thridColor
] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thridColor);
```

This is array destructuring.

::: tip
The idea here is that we do declaration (create variables) and assignment (set values to varaibles) at once. 

We don't write them as separate operations.
:::

Now, we have `3` variables for all `3` colors. If we want to leave out the middle one for example, we could just put a comma:

``` js
var [
  firstColor,
  ,
  thridColor
] = colors;

console.log(firstColor);
console.log(thridColor);
```

So this is the idea: we destruct (decompose) an array as individual variables.

We could more colors and just save the first `2` as individual variables:

var colors = ['green', 'purple', 'white', 'red', 'lime'];

``` js
var [
  firstColor,
  secondColor,
  ...restColors
] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(restColors);
```

We use `...` to **gather** together the rest of colors from the array :D

Or we could have fewer colors and we would get `undefined` for all the extra variables:

``` js
var colors = ['green'];

var [
  firstColor,
  secondColor,
  thirdColor
] = colors || [];

console.log(firstColor); // green
console.log(secondColor); // undefined
console.log(thirdColor); // undefined
```

Let's look at some edge cases and best practices:

1. `null` arrays

If the array is `null` and we want to destructure it, the code fails:

``` js
var colors = null;

var [
  firstColor,
  secondColor
] = colors;

console.log(firstColor);
console.log(secondColor);
```

To solve this, we need to assign an empty array if it's `null` or `undefined`.

``` js
var colors = null;

var [
  firstColor,
  secondColor
] = colors || [];

console.log(firstColor); // undefined
console.log(secondColor); // undefined
```

2. **default values**

You can choose to have **default values** for the variables if there is no correspoding value at that position:

``` js
var colors = null;

var [
  firstColor,
  secondColor = 'white'
] = colors || [];

console.log(firstColor); // undefined
console.log(secondColor); // white
```

One small thing, we have done declaration and assignment in one statement:

``` js
var [
  firstColor,
  secondColor = 'white'
] = colors || [];
```

But these don't have to be both:

``` js
var firstColor;
var secondColor;

[
  firstColor,
  secondColor = 'white'
] = colors || [];
```

In this case, it would be interesting to declare a variable (an object) and to assign the values to its properties:

``` js
var newColors = {};

[
  newColors.firstColor,
  newColors.secondColor = 'white'
] = colors || [];

console.log(newColors.firstColor);
console.log(newColors.secondColor);
```

You can see that we can play around with it in some ways. 

## Summary

The general idea of destructuring (as its name implies) is to decomponse something bigger into smaller parts (such as an array into variables).

