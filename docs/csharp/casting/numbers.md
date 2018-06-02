# Number Conversions

We can cast any integer to an upper or lower `Int` class:

``` csharp
var a = 12;
var b = (short)a;
var c = (long)a;
```

These are **numeric conversions**, more specifically **explicit conversions**.

We could replace the `var` with the actual type and then we wouldn't need the explicit conversion anymore.

``` csharp
var a = 12;
short b = a;
```

Now, this is called an **implicit conversion** because you let the compiler do it "implicitly".

Then, we can use `GetTypeCode` to see the type for each variable:

``` csharp
Console.WriteLine(a.GetTypeCode());  // Int32
Console.WriteLine(b.GetTypeCode());  // Int16
Console.WriteLine(c.GetTypeCode());  // Int64
```
