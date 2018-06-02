# Arrow functions

We are going to look at some arrow functions :D

Here's a function which doubles a number:

``` typescript
var double = function(
  value: number
): number {
  return value * value;
}
```

And we can call it simply with a number:

``` typescript
var result = double(3);
console.log(result); // 9
```

Okay, let now tranform it into an arrow function.

Essetially, we need to replace the **curly braces** and the **return** type with the fat arrow:

``` js
{
  return ...
}
// with
=>
```

And, we don't need the `function` keyword anymore.

So, this is the **lambda** version:

``` typescript
var double = (
  value: number
): number => value * value;
```
