# C# operators

Let's look at operators in C#, shall we? :grin:

## null coalescing operator

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
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

### Another example

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
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## is operator

This operator evaluates the type of a variable (**type compatibilty**):

``` csharp
var color = "purple";

if (color is string)
{
    Console.WriteLine(color);
}
```

## increment and decrement

These operators are `++` and `--` which add and respectively substract `1` from a number.

The interesting thing here is that we can put these operators before or after the variable.

``` csharp
var number = 1;
Console.WriteLine(number);   // 1
Console.WriteLine(number++); // 1
Console.WriteLine(++number); // 3
```

### Usage

Whenever you want to use a variable during a statement and then increment, put the `++` operator **after**.

If you want to first increment and then use the variable during that statement, put the `++` operator **before**.

So:
- number++ – use, then increment
- ++number – increment, then use


## && and ||

One interesting thing about the `&&` operator is **short-circuiting**.

If we have any object, we can use the `&&` operator to type safe code:
- in the first part we check if it's diffferent than `null`
- if it is, we can call properties and method on it

``` csharp
List<int> numbers = null;

if (numbers != null && numbers.Contains(0))
{
    ...
}
```

But if we replace `&&` with `||`, it throws a `NullReferenceException` exception.

Why? :scream:

Because of **short-circuiting**: whenever we use the `&&` operator and the first part is `false`, then the compiler doesn't even bother continuing. C# offers also these operators: `&` and `|`, but they don't short-circuit.

