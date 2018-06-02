## Declaration

We can create **integers** like so:

``` csharp
var number = 43;
```

But what about **floating-point numbers** or **decimals**?

Well, we can just add a specific letter after the number:

``` csharp
var floatNumber = 12F;  // float
var doubleNumber = 23D; // double
var decimalNumber = 5M; // decimal
var longNumber = 12L;   // long
```

So, we need:
- `F` for float
- `D` for double
- `M` for decimal
- `L` for long

Also, we can create `double` numbers like so:

``` csharp
var doubleNumber = 12.34;
```

For **integers**, we can can unsigned numbers when we don't care about negative numbers and we want only positive ones:

``` csharp
var unsignedNumber = 12U;
Console.WriteLine(unsignedNumber);
```

So, it means that the max value for unsigned should be double the max one for all ints, doesn't it? :smirk:

``` csharp
var maxInt = int.MaxValue;
var maxIntUnsigned = UInt32.MaxValue;

Console.WriteLine(maxIntUnsigned > maxInt * 2); // True
````

## isNaN

To check if a value if not a number, you need to use `double.isNaN`:

``` js
var number = double.NaN;
var result = double.IsNaN(number);
Console.WriteLine(result); // True
```

Also, whenever you try to divide a number by `0`, then the `DivideByZeroException` is thrown.

## Overflowing

We can get the maximum value of an integer like this:

``` csharp
var maxValue = int.MaxValue;
Console.WriteLine(maxValue); // 2147483647
```

If we increment this value, then the `maxValue` get the **minumum value**: :scream:

``` csharp
maxValue++;
Console.WriteLine(maxValue); // -2147483648
```

And this can be a real problem because this behavior passes as normal. This is called **integral overflow**.

If you want to throw exceptions when this happens, you can use **checked**:

``` csharp
checked
{
    maxValue++;
    Console.WriteLine(maxValue);
}
```

This time, it throws the `OverflowException` exception because the incrementing operation caused an overflow.

We can also check only an statement:

``` csharp
checked(maxValue++);
```

::: warning
The `checked` operator cannot be applied for `double`, `float` and `decimal`.
:::

So make sure that you are aware of this issue and when this might happen, you should use `checked`.

