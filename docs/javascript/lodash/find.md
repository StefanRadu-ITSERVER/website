# Find

The idea of this function is to returns the first occurence of an item.

Let's create an array of numbers:

``` js
let numbers = [12, 3, 34, 23, 4];
```

## Procedural way

``` js
let firstOddNumber = null;

for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  if (number & 2 !== 0) {
    firstOddNumber = number;
    break;
  }
}

console.log(firstOddNumber);
```

## Functional way

We can use the `find` function:

``` js
firstOddNumber = _.find(numbers, number => {
  return number % 2 !== 0;
});

console.log(firstOddNumber); // 3
```

## Summary

The `find` function returns the **first** item that passes / satisfies the criteria / condition. 
