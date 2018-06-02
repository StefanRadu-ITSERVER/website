# Optional and Default parameters

Let's look at paramters, shall we? :grin:

I am going to make a utility function that translates a date. For this function, I have `3` parameters:
- `date` which is the date to translate
- `language` which is the translation languague
- `options` which contains some details about date parts that we want to use.

``` ts
function translateDate(
    date: Date,
    language: string = 'en-UK',
    options?: object): string {
  return date.toLocaleDateString(language, options);
}
```

1. The first parameter is **required** (meaning that we are forced to pass to call the method).

2. The second parameter is **default** (meaning it gets the value `en-UK` if no other value is provided, meaning if it's null).

3. The thrid paramter is **optional** denoted by the `?` question mark (we don't need to pass anything here as with the second one if we don't want to, but this time it will get the value `undefined` because there is no **default** value).

Nevertheless, let's create a date and call it:

``` ts
let date = new Date();
let options = { weekday: 'long', day: 'numeric', month: 'long' };

var result = translateDate(date, 'ro-Ro', options);
console.log(result);
```

This prints: `sâmbătă, 26 mai` because I passed a language and some options.

If I call like this, I get only the translation/format:

``` ts
var result = translateDate(date, 'ro-Ro');
console.log(result); // 26.05.2018
```

And if I don't pass anything beside the date, then I get the default format:

``` ts
var result = translateDate(date);
console.log(result); // 5/26/2018
```

::: tip Order
Make sure that you put **optional paramters** after the **default ones**. They have to be the last ones.
:::


Normally, you would check the value of **optional parameters** to not be `undefined`, but in our case it doesn't matter (the `toLocaleDateString` method still works).
