---
title: Methods
---

## Top 10 methods
We are going to see the most important methods provided by the `Array` class.


### `Array.Copy()`
This method copies the items of an array to another one. The third argument is to specify how many items to copy.

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
var fruits2 = new string[fruits.Length];

Array.Copy(fruits, fruits2, 3);
```

::: tip
To copy all the items, just pass `fruits.Length` as the third argument.
:::


### `Array.IndexOf()`
``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.IndexOf(fruits, "coconut");

Console.WriteLine(result); // 1
```

### `Array.Exists()`

``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.Exists(fruits, fruit => fruit.Contains("l"));

Console.WriteLine(result);
```

### `Array.Find()`
``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.Find(fruits, fruit => fruit.Contains("l"));

Console.WriteLine(result);
```

### `Array.FindLast()`
``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.FindLast(fruits, fruit => fruit.Contains("l"));

Console.WriteLine(result);
```

### `Array.FindIndex()`
``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.FindIndex(fruits, fruit => fruit.Contains("l"));

Console.WriteLine(result);
```

### `Array.FindAll()`
``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.FindAll(fruits, fruit => fruit.Contains("l"));

foreach (var fruit in result)
{
    Console.WriteLine(fruit);
}
```

### `Array.Reverse()`
``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

Array.Reverse(fruits);

foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

### `Array.Sort()`
``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

Array.Sort(fruits);

foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

Maybe we want to reverse the order in which case we need to create a new class which implements the `IComparer` interface:
``` csharp
    public class ReverseComparer : IComparer<String>
    {
        public int Compare(string x, string y)
        {
            return y.CompareTo(x);
        }
    }
```

And then, just pass an instance of this class as an argument:

``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

Array.Sort(fruits, new ReverseComparer());

foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

### `Array.BinarySearch()`
You can search for an element in a **sorted** array (you must sort the array in an ascending order before applying this algorithm).

``` csharp
var prices = new[] { 12, 32, 53.3, 43 };

Array.Sort(prices);

var index = Array.BinarySearch(prices, 32);
if (index < 0)
    Console.WriteLine("nothing");
else
    Console.WriteLine(index);
```

::: danger Duplicates
If an array contains duplicate elements (which have the same value), then `BinarySearch` will return the index of one of those elements.
:::