# String Operator

We are going to look at an interesting example of how JavaScript behaves.

Let's say we have two variables: one a number and another one a string:

``` js
var nr1 = 20;
var nr2 = "18";
```

And we are trying to get the sum of them:

``` js
var sum = nr1 + nr2;
console.log(sum); // 2018
```

The result is actually `2018`. :astonished:

::: warning
This is a frequent question asked at job interviews.
:::

So, what it's happening here is that JavaScript assumes you want to concatenate (combine) these values together because one of them is a string (is inside quotation marks).

The `+` operator is no longer considered an *arithmetic operator* here, but a *concatenatation operator* (string operator).

``` tip + operator
This `+` operator is often used to combine strings together:
```

``` js
var word1 = "city"
var word2 = "park"
var result = word1 + word2; // citypark
```

So, it's not a mistake to use the `+` operator in this way, but when you indend to actually add numbers toghether, then it becomes a problem. :wink:

## minus operator

But, I won't let you with just this. What about the `-` operator? 

Does it behave the same way?

Well, nope! :confused:

If we actually try to subtract these numbers:

``` js
var diff = nr1 - nr2;
console.log(diff);
```

We get `2` as the result. :scream:

JavaScript will actually convert the string to a number (parsing). In this way, the operation can take place.

And this applies to multiplication `*`, division `/`, and modulus `%`.

## Conclusion

The reason why the `+` operator stands above the others in combining strings is that it can become a **string operator** based on the type of the variables. It is the only *arithmetic operator* that can do this.
