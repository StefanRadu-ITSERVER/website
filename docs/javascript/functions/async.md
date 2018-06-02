## Understanding Async Functions

Let's see the difference between a synchronous and asynchronous functions in JavaScript.

For this exercise, we only need the console of the browser.

Copy and paste the following sync function:

``` js
function print(message) {
  return message;
}
```

Then, let's call it:

``` js
print("hi, there")
```

We can see that we get the message printed out:

```
hi, there
```

Let's make the method async.

We need to paste the same method, but with the async modifier:

``` js
async function print(message) {
  return message;
}
```

Now, let's call the function:

``` js
print("hi, there")
```

This time, it returns a `Promise`:

``` js
Promise {<resolved>: "hi, there"}
```

To get the result of the promise, we need to use `then()`:

``` js
print("hi, there")
  .then(result => console.log(result));
```

This is the general idea: an async function returns a `Promise` which you need to resolve with a function.

The `result` parameter found in the `then` function represents the result from the `print` function. It contains the value of `message`.

