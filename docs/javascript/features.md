## console.log

We can print text to the console by using `console.log`:

``` js
console.log('I hope you are fine');
```

Also, we can print multiple things:

``` js
console.log('melon', 'car', 'parrot');
```

## alert

We can create **popup windows** with `alert`:

``` js
alert('Hi, there!');
```

## timeout

We can use the `timeout` function to mimic a communcation to a server:

``` js
setTimeout(function() {
  console.log("Check this out");
}, 1000);
```

- the first paramter is the function that we want to call
- the second parameter is the delay in milliseconds ms (in this case 1 second).

::: tip async
This can also be useful to fake the implementation of an async function call in JavaScript.
:::



