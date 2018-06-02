# Comparison

Let's compare some strings, shall we? :sweat_smile:

## Equality
A string is a **reference type**. 

Even though, when you compare two strings to see if they are equal to each other, the compiler compares their values (just as **value types**):

``` csharp
var name = "Daniel";
var secondName = "Daniel";

if (name == secondName) {
    // this is true
}
```

Also, we can see if they are different with the `!=` operator:

``` csharp
if (name != secondName) {
    // this is false
}
```

### Ignoring Case

But there is a limitation here: what about ignoring the case of the characters?

We could still do the same thing as before with the `Equals` method:

``` csharp
if(string.Equals(name, secondName))
    Console.WriteLine("these are equal");
```

But at the same time, we can specify whether or not we want the to ignore the casing of the strings:
``` csharp
var first = "Daniel";
var second = "daniel";
if (first.Equals(second, StringComparison.OrdinalIgnoreCase))
{
    Console.WriteLine("they are equal");
}
```

So, for non-case-sensitive comparisons, use the equals method and pass a second argument of `OrdinalIgnoreCase`.


## Compare
We can compare strings as well. :smile:

The `Compare` method compares the **ASCII codes** of each character.

``` csharp
var first = "break";
var second = "Break";

if (String.Compare(first, second) < 0)
    Console.WriteLine("first");
```
