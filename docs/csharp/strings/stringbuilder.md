### StringBuilder

Taking the same example with reversing strings, we can you string concatenation for this:

``` csharp
var text = "Reversing strings is easy";
var reversedString = string.Empty;

for (int i = 0; i < text.Length; i++)
{
    reversedString += text[text.Length - i - 1];
}
Console.WriteLine(reversedString);
```

::: danger Immutability
But this is so inneficient. Every single time we append a new character, the compiler creates a new string and assigns to the `text` variable. So efficiency is very low.
:::


Any change to a string the compiler will produce a new string and will put that in the 
original string. But by using this class, then it will behave like we were expecting a regular string to behave.


To solve this, we can use the `StringBuilder` object. This class was created to solve the problem with the immutability of strings. It has a method called `append`:


#### Efficiently working with String:
It is recommended to use a class named StringBuilder if you want to change the value of a string.

```csharp 
var builder = new StringBuilder();
builder.Append("Hello");
Console.WriteLine(builder.ToString());
```

Here we add more text to the string and here is why it is more benefic to use in this way.
``` csharp
builder.Append(", ").Append("World").Append("!");
Console.Write(builder.ToString());
```

The StringBuilder doesn't create any new string, it only creates a single object in memory and builds strings in the most efficient way possible.    


::: tip
So, whenever you want to change the value of a string, you should consider using `StringBuilder` to achieve efficiency and perfomance in your code.
:::

Here is the reversed example with `StringBuilder`:

``` csharp 
var text = "Sometimes strings are inefficient";
var reversedString = new StringBuilder();

for (int i = 0; i < text.Length; i++)
{
    reversedString.Append(text[text.Length - i - 1]);
}
Console.WriteLine(reversedString.ToString());
```

::: tip 
You can think of the StringBuilder as modelling a mutable implementation of a string.
:::