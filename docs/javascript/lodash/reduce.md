# Reduce

Can we get the **total** price of phones?

Yes, with the `reduce` function :smirk:

We are going to calculate the total price of all phones in an array.

First we need an array of phones:

``` js
let phones = [
  { model: 'iPhone SE', price: 450.00, color: 'white' },
  { model: 'Samsung S9', price: 900.00, color: 'black' },
  { model: 'LG G7', price: 740.00, color: 'black' }
]
```

## Procedural way

Let's see the procedural approach first

``` js
let totalPhonePrice = 0;

for (let i = 0; i < phones.length; i++) {
  const phone = phones[i];
  totalPhonePrice += phone.price;
}

console.log(totalPhonePrice);
```

## Functional way

We can use the `reduce` function:

``` js
let totalPhonePrice = _.reduce(phones, (acc, phone) => {
  return acc + phone.price
}, 0)

console.log(totalPhonePrice)
```

There are `2` things to notice here:
1. `acc` stands for the accumulator. This is the value accumulated from each item.
2. there is `0` passed as the thrid argument. This is again related to the accumulator and is the initial value / the starting point of the accumulator.

::: tip
If we don't pass an initial value for the accumulator (in our case `0`), then the default value is the first element of the array.

So, can we leave it out? No! The first item is a `Phone` object and JavaScript doesn't know to take its `price` attribute only, instead it takes the whole object and it returns a mess :joy:
:::

## Summary

The `reduce` function takes an array and "reduces" / narrows the array to only one value (in our case a number representing the sum of prices).
