# Range

We can generate numbers with the `Range` method:

``` csharp
var range = Enumerable.Range(0, 8);

foreach (var number in range)
{
    Console.WriteLine(number);
}
```

This generate a collection with numbers from `0` to `7`.
