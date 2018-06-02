# Filter

Let's filter an array of numbers to get only the odd ones :wink:

## Procedural way

We are going to see first the procedural way.

So, we need an array of numbers:

``` js
let numbers = [12, 3, 34, 23, 4];
```

Now, we need to declare another array to hold the odd numbers and use a `for` loop to add only the odd numbers:

``` js
let oddNumbers = [];

for (let i = 0; i < numbers.length; i++) {
  const element = numbers[i];
  if (element % 2 !== 0) {
    oddNumbers.push(element);
  }
}

console.log(oddNumbers); // 3, 23
```

## Functional way

::: warning
Don't forget to include **Lodash**.
:::

``` js
let oddNumbers = _.filter(numbers, number => {
  return number % 2 !== 0
});

console.log(oddNumbers); // 3, 23
```

You are passing a function which returns either `true` or `false` (predicate).

So, if this function returns `true`, then the item gets in the array, otherwise it's left out.

## Another example

Let's look at another example, this time with phones :iphone:

I am going to create an array with `3` phones:

``` js
let phones = [
  { model: 'iPhone SE', price: 450.00, color: 'white' },
  { model: 'Samsung S9', price: 900.00, color: 'black' },
  { model: 'LG G7', price: 740.00, color: 'black' },
]
```

And we would like to get all the expensive phones: those that are above `$600`.

``` js
let expensivePhones = _.filter(phones, phone => {
  return phone.price > 600
})

console.log(expensivePhones);
```

And we get the `Samsung` and the `LG`. :D
