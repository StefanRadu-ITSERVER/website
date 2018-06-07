# Splitting
We can split any string into separate parts based on a specified character. 

The `Split` method returns an array as the result:

``` csharp
var list = "coconut,melon,avocado";
var fruits = list.Split(',');

foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

![Watermelon](https://media.giphy.com/media/TQI4MzZIoHBcs/giphy-downsized-large.gif)

[Giphy](https://giphy.com/gifs/satisfying-watermelon-splitting-TQI4MzZIoHBcs)

If there are empty items in the resulting array, we can remove them. 

Notice the new array for the separators / delimiters.

``` csharp
var list = "coconut,,melon,avocado,";
var charSeparators = new char[] { ',' };
var fruits = list.Split(charSeparators, StringSplitOptions.RemoveEmptyEntries);

foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

## In N Parts

We can set the maximum number of substrings which will be returned:

``` csharp
var list = "coconut,,melon,avocado,";
var charSeparators = new char[] { ',' };
var fruits = list.Split(charSeparators, 2);

foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}
/* The output of this will be: 
coconut
,melon,avocado,
*/
```

::: tip
If you want, you can add `StringSplitOptions.RemoveEmptyEntries` because there is an overload for it.
:::

## By Strings

Instead of a simple character `char`, we can have strings as delimiters, but we need to specify the splitting options (in this case `None`):

``` csharp
var list = "strawberry,blueberry,raspberry";
var stringSeparators = new string[] { "berry" };
var fruits = list.Split(stringSeparators, StringSplitOptions.None);
foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

::: tip Note
For all of these splitting examples, if the delimiter is null, then the compiler will take the whitespace for the delimiter by default.
:::