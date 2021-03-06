--- 
title: Declaration
---

## Assignment
A `string` value is specified inside quotation marks `""`:

``` csharp
"Daniel"
```

We can declare it with the full type name:

``` csharp
System.String name = "Daniel";
```

But nobody does that. We can use the alias instead which is `string`:

``` csharp
string name = "Daniel";
```

Or we can use the `var` keyword:

``` csharp
var name = "Daniel";
```

We can initialize a `string` with the an empty value `""` or with the literal `string.Empty`:

``` csharp
var name = string.Empty;
```

::: tip Empty strings
We could have used `""` to signify an empty string, but you can use `string.Empty` which is more elegant.
:::

![Leonardo elegant](https://media.giphy.com/media/KHgcyO0kirKTK/giphy.gif)
<br>
[Giphy](https://media.giphy.com/media/KHgcyO0kirKTK/giphy.webp)


If we want to declare a `null` string, we can just declare it and not assign it:

``` csharp
string name;
```

::: warning
Notice that this time we used `string` and not `var`.

It's impossible to use `var` when you don't assign a value (the compiler cannot infer the type).
:::

## IsNullOrEmpty method

We can check to see whether a string is `null` or `empty`:
``` csharp
if (String.IsNullOrEmpty(name))
    Console.WriteLine($"{nameof(name)} is empty.");
```

## Constant strings
Many times, you will see that strings are defined as `const`. In this way, you can make strings that you cannot change (aka **reassign**):

``` csharp
const string message = "Persistent string";

// This gives an error
message = "new value";
```

### const vs readonly
You can make an **instance field** constant like so:

``` csharp
public const string Message = "Persistent string";
```

This makes the variable `Message` not able to hold / point to another value. But you can make it `readonly` as well:

``` csharp
public readonly string Message = "Persistent string";
```

::: tip const vs readonly
The difference here is that you can now reassign the value of `Message`, but only in the constructor or a variable initializer.
:::

## Looping
In essence the `string` type is an **array of characters** which means that we can iterate over it with `foreach` as we would normally do with arrays:

``` csharp
foreach (var character in text)
{
    Console.WriteLine(character);
}
```

So, because internally a string is a collection of `Char` objects, we can use `foreach`. It is moreover a **readonly** collection, for we know that strings are **immutable**.


## Conversion
We can also convert an Array of `char` items into a string:

``` csharp
var charArray = new[] { 'C', 'o', 'd', 'e' };
string message = new String(charArray);
Console.WriteLine(message);
```

### ToString

We call the `ToString()` method which converts any object to a string:
``` csharp
var age = 21;
var ageAsString = age.ToString();
Console.WriteLine(ageAsString); //21
```
