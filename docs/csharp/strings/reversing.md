---
title: Reversing
---

### `Reverse` method
There are a couple of ways to reverse a string. I am going to show you one procedural way and a built-in method.

1. by using the `for` loop and going backwards:
```csharp
var text = "Reversing strings is easy";

for (var i = 0; i < text.Length; i++)
{
    var character = text[text.Length - i - 1];
    Console.Write(character); // ysae si sgnirts gnisreveR
}
```
But this prints the result only. 
We might want to save it in an array:

``` csharp
var text = "Reversing strings is easy";
var textReversedAsArray = new char[text.Length];
for (var i = 0; i < text.Length; i++)
{
    var character = text[text.Length - i - 1];
    textReversedAsArray[i] = character;
}
Console.WriteLine(textReversedAsArray);
```

You can transform the array to a string:

``` csharp
var textReversed = new string(textReversedAsArray);
Console.WriteLine(textReversed);
```

2. by using the `Reverse` and `ToArray` methods:

``` csharp
var text = "Reversing strings is easy";

var textReversedAsArray = (text.Reverse().ToArray());
Console.WriteLine(textReversedAsArray);

var textReversed = new string(textReversedAsArray);
Console.Write(textReversed);
```

As you can see, we can reverse the string in one line and we can transform it into a string as well.
