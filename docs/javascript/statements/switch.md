# switch statement

`switch` statements are easier to read than their representation in `if else` statements.

Let's create a function which gets an `amount` and a `currency` and returns the `amount` formatted.

``` js
function formatAmount(amount, currency) {
    switch (currency) {
        case 'dollar':
            return `$${amount}`;

        case 'euro':
            return `€${amount}`;

        case 'pound':
            return `£${amount}`;

        default:
            return amount;
    }
}
```

As you can see, we have `3` different cases for our `switch` statement and based on the `currency` we get the amount formatted as follows:

``` js
var amount = 230;
var currency = 'euro';
var formattedAmount = formatAmount(amount, currency);
console.log(formattedAmount); // €230
```
