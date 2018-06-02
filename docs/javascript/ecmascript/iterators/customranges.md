## Custom ranges with iterators

This is the same idea of `Enumerable.Range()` method in C#.

Unlike C#, JavaScript doesn't have a built-in way of generating these ranges.

So, let's create one :D

You can generate a range by using:
- the prototype of the `Number`
- iterator
- generator
- the `Symbol.iterator`

``` es6
Number.prototype[Symbol.iterator] = function* () {
  for (let i = 0; i < this; i++) {
    yield i;
  }
}

var range = [...5];
console.log(range);
```

And this will create an array from `0` to `4`:

```
Array [ 0, 1, 2, 3, 4 ]
```
