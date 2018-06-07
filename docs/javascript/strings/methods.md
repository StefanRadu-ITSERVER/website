### Slice

We can remove end characters from a string by providing the `sclice` method with a negative number:

``` javascript
var text = "It is a sunny day in the fields of the Shire."
text = text.slice(0, -4);
console.log(text);
```

Result:

```
It is a sunny day in the fields of the Sh
```

It removed `ire.`.
