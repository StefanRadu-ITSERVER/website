# Iterators

Let's display the contents of a set of data with iterators :)

We are going to create a `numbers` array and a variable to hold its `iterator`:

``` js
var numbers = [1, 2, 3];
var iterator = numbers[Symbol.iterator]();
```

This is the default iterator that an array is constructed with.

Now, let's implement a `while` loop to display the items one by one:

``` js
let item = iterator.next();

while (!item.done) {
  console.log(item);
  
  item = iterator.next();
}

console.log(item);
```

We can see that we get the following values:

``` js
Object { value: 1, done: false }
Object { value: 2, done: false }
Object { value: 3, done: false }
Object { value: undefined, done: true }
```

While there are items inside the array, we call `next` on the iterator to move to the next item until its `done`.

So the iterator contains two attributes:
- value
- done (boolean)

::: tip Remember
Iterators are used to step through a set of data.
:::

## for of

But, this is the manual / procedural way of doing it.

The loop which must be used with iterators is `for of`. 

Let's see it in action:

``` js
var numbers = [1, 2, 3];

for (const number of numbers) {
  console.log(number);
}
```

And this prints the `value` attribute of each item.

## for in

There is another loop called `for in` which gets the **key** of items:

``` js
var numbers = [1, 2, 3];

for (const key in numbers) {
  console.log(key);
} // 0 1 2
```

::: warning
This `key` should not be used for something like this: `numbers[key]`.

If there is a custom iterator defined, this `for in` loop is still going to use the built-in iterator.
:::

But we don't use it. Most of the time, we use the `for of` loop.

### Summary

So, we can iterate over **iteratable** sets of data like arrays, strings etc.

Object don't come shipped with an iterator by default (this feature is pending).

``` js
for (const prop of document) {
  console.log(document);
} // TypeError: document is not iterable
```
