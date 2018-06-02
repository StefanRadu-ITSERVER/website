# Random numbers

Let's look at how to create random numbers in JavaScript.

``` javascript
var randomNumber = Math.random();
console.log(randomNumber);
```

By only doing this, it will print out numbers between `0` and `1`:

Examples:
```
0.8813606250872746
0.05016415843877131
```

If you want below a certain number, then you can multiply the `randomNumber` with the limit (in this example the range is `0` – `12`):

``` javascript
var randomNumber = Math.random() * 12;
console.log(randomNumber);
```

Examples:
```
11.553345329163783
3.468040622230529
```

Then, we can use `floor` to round the `randomNumber` downwards to the nearest integer:

``` javascript
var randomNumber = Math.floor(Math.random() * 12);
console.log(randomNumber);
```

Examples:
```
3
7
```


