--- 
title: Strings in C#
---

# C# Strings

The value of strings is text. This is how we store text in C#.
String is an **immutable** (unchangeable) sequence of characters. Immutable means it cannot change :neutral_face:. So whenever you create a string, it remains the same, you can't ever change the items inside of it, or its size. The idea is that you can't manipulate an existing string.


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

We can initialize a `string` with the an empty value `""` or with the literal `string.Empty`
``` csharp
var name = string.Empty;
```

::: tip Empty strings
We could have used `""` to signify an empty string, but you can use `string.Empty` which is more elegant.
:::

![Leonardo elegant](https://media.giphy.com/media/KHgcyO0kirKTK/giphy.gif)


If we want to declare a null string, we can just declare it and not assign it:
``` csharp
string name;
```

::: warning
Notice that this time we used `string` and not `var`.
:::


We can check to see whether a string is null or empty:
``` csharp
if (String.IsNullOrEmpty(name))
    Console.WriteLine($"{nameof(name)} is empty.");
```




### Constant strings
Many times, you will see that strings are defined as `const`. In this way, you can make strings that you cannot change (aka reassign):

``` csharp
const string message = "Persistent string";

// This gives an error
message = "new value";
```

#### const vs readonly
You can make an instance field constant like so:
``` csharp
public const string Message = "Persistent string";
```
This makes the variable `Message` not able to hold / point to another value. But you can make it readonly as well:
``` csharp
public readonly string Message = "Persistent string";
```
The difference here is that you can now reassign the value of `Message`, but only in the constructor or a variable initializer.


## Looping
In essence the `string` type is an array of characters which means that we can iterate over it with foreach as we would normally do with arrays:
``` csharp
foreach (var character in text)
{
    Console.WriteLine(character);
}
```

So, because internally a string is a collection of `Char` objects, we can use foreach. It is moreover a readonly collection, for we know that strings are immutable.


## Conversion
We can also convert an Array of `char` items into a string:
``` csharp
var charArray = new[] { 'C', 'o', 'd', 'e' };
string message = new String(charArray);
Console.WriteLine(message);
```

## `ToString()`

We call the `ToString()` method which converts any object to a string:
``` csharp
var age = 21;
var ageAsString = age.ToString();
Console.WriteLine(ageAsString); //21
```



#### String interpolation
We can't talk about the `String` class and ommit the interpolation. Maybe, you want to insert some values in a string. There is the `string.Format` method which is the old approach:

``` csharp
var name = "Daniel";
var age = 21;

var message = string.Format("I'm {0} and {1} years old.", name, age);
Console.WriteLine(message);
```

The newer approach is string interpolation which was introduced in C#6:
``` csharp
var name = "Daniel";
var age = 21;

var message = $"I'm {name} and {age} years old."; 
Console.WriteLine(message);
```

You need to prepend the string with the dollar `$` sign. And then you can insert the variables where you need them. No need to use numbers, remember the order etc. :D


::: warning C# vs C++ strings
In a C# string, there is no null terminating character (that is the `\0`). As you may or may not know, in C++ each string must end with this special character which denotes the fact that the string has ended.
:::


