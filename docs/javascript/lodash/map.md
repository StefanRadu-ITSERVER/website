# Map

This is my personal favorite function from **Lodash** :heart_eyes:

I like that it makes a relatively difficult logic easy to implement in just a few lines of code.

Now, pay attention to this :mute:

You can take one collection of items and transform / convert it into something else. So, each item is converted to another value.

We are going to see how to take an array of numbers and return the **square root** of all of them.

First, we need an array of numbers:

``` js
let numbers = [12, 3, 34, 23, 4];
```

## Procedural way

``` js
let numbersSquareRooted = [];

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  numbersSquareRooted.push(Math.sqrt(number).toFixed(2));
}

console.log(numbersSquareRooted)
```

::: tip toFixed
With the `toFixed` function, we can specify how many decimals can a number have (in our case it's enough `2`).
:::


### Procedurally with functions

We could have implemented this with some functions:

``` js
function sqrt(value){
  return Math.sqrt(value).toFixed(2);
}

function transform(array, func){
  let result = [];

  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    result[i] = func(item);     
  }

  return result;
}
```

And then call the `transform` function passing an array and a function:

``` js
var numbers = [1, 4, 9];
var numbersSquareRooted = transform(numbers, sqrt);

console.log(numbersSquareRooted); // 1 2 3
```

One important thing you must notice in these example is that we create a separate array in which we add the transformed items.
We don't change the original array, we are returning a new one with all the transformations (so we don't operate **in place** – if it was in place, then this function would not be **pure** because it changes the data – mutability).

In functional programming terms, this is to create a **pure function**.

## Functional way

We can use the `map` function to generate the new array:

``` js
let numbersSquareRooted = _.map(numbers, number => {
  return Math.sqrt(number).toFixed(2);
})

console.log(numbersSquareRooted);
```

As you can see, you can pass an anonymous function as the second parameter.

This is a pure function because it's not changing the original array.

Also, we don't care about **implementation details** which is a huge concept to grasp in programming: the way in which this function works is a detail, I don't need to be aware of it to call it (it could work in parallel, maybe recursivelly etc.). If it has side effects, then it's not **pure** anymore.

::: tip Naming
The reason it's called **mapping** is because there is a 1:1 relationship between the source collection and the result. They both have the same number of items.
:::

## Built-in function

In JavaScript, we already have a built-in `map` function. Why to use this one from Lodash? :confused:

Well, let's see how to use the built-in one and we can make an observation (hint: it is a more subtle reason)

This is the `map` function from JavaScript (I am going to paste the Lodash one below it)

``` js
let numbersSquareRooted = numbers.map(number => {
  return Math.sqrt(number).toFixed(2);
})
```

``` js
let numbersSquareRooted = _.map(numbers, number => {
  return Math.sqrt(number).toFixed(2);
})
```

In the first one (the buit-in) we call the `map` **method** direcly on the array (so we have an object and we chain method calls). This `map` method works because it knows its **context**.

In the second one, we call the `map` **function** and we pass the array as the first argument.

You have read well that I said the **method** and **function** and this is a difference in mindset – that is in the way you right code.


### Chaining

In technical terms, this is called **composition** and this way of composition is called **chaining** which is not the cup of tea of functional programmers.

So it's not about taking one function and passing a collection and another function (as I showed before), but it's method calling approach. So, the you will have a chain of calls in your code (also it is a more difficult way of composing functions instead of passing them).


### Which one to use?

This boils down to your intention: 
- if you want to come closer to **Functional Programming**, choose Lodash `map` (we prefer passing things to functions)
- if **Object-Oriented Programming** is your intention, choose ES `map` (we prefer combining data and logic together)

Nevertheless, EcmaScript provides a lot of great functions. You only add Lodash when you use many of its functions.

## Summary

In any case, the function that you pass must be a **pure transformation** which takes the items of of collection and returns another one with the items **transformed**.
