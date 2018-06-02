# Some

Does an array of numbers contain at least an odd one?

Well, we can find that out using `some`.

We need an array of numbers:

``` js
let numbers = [12, 3, 34, 23, 4];
```

## Procedural way

``` js
let arrayContainsOdd = false;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number % 2 !== 0) {
    arrayContainsOdd = true;
    break;
  }
}

console.log(arrayContainsOdd); // true
```

## Functional way

Instead of writing the logic from scratch, we have the `some` function:

``` js
arrayContainsOdd = _.some(numbers, number => {
  return number % 2 !== 0;
});

console.log(arrayContainsOdd);
```

# Summary

So, `some` returns `true` if **at least** one item in the collection satisfies the condition; otherwise false (meaning if none).
