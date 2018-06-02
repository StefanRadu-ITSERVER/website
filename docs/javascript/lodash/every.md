# Every

Does an array of numbers contain **only** odd numbers?

We need an array of numbers:

``` js
let numbers = [12, 3, 34, 23, 4];
```

## Procedural way

``` js
let arrayContainsAllOdd = true;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number % 2 === 0) {
    arrayContainsAllOdd = false;
    break;
  }
}

console.log(arrayContainsAllOdd); // false
```

## Functional way

We can use the `every` function to get a `true` / `false` value:

``` js
arrayContainsAllOdd = _.every(numbers, number => {
  return number % 2 !== 0;
});

console.log(arrayContainsAllOdd); // false
```

# Summary

So, `every` returns `true` if **all** the items in the collection pass/satisfy the condition; otherwise `false` (even for one which doesn't).
