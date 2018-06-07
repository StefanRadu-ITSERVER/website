# Null Coalescing Operator

<youtube :src="'AB1aMjbQX50'"/>

The **null coalescing operator** `??` checks to see if a value if `null`.

``` csharp
var color = "purple";
Console.WriteLine(color ?? "undefined"); // purple

color = null;
Console.WriteLine(color ?? "undefined"); // undefined
```

So:
- display the value of `color` if it's **not** null
- otherwise print `undefined`

Usage:

It's useful when you want to see if a string contains anything instead of using an `if` statement.

## Another example

<youtube :src="'cpWiXvVT8Fc'"/>

We can define a function to format a date:

``` csharp
public static string FormatDate(DateTime date, string format = null)
{
    return string.Format(format ?? "{0}", date);
}
```

Instead of using an `if` statement, we can simply check if the `format` is `null` when we pass it to `string.Format`. In case of `null`, it uses the left operand.

And we can call it with a **format**:

``` csharp
var now = DateTime.Now;
var formattedValue = FormatDate(now, "{0:yyyy MM dd}");
Console.WriteLine(formattedValue); // 2018 05 25
```