---
title: Methods
---

## C# Array Methods
We are going to see the top `10` most important methods provided by the `Array` class.

### `Array.Copy()`
This method copies the items of an array to another one. The third argument is to specify how many items you want to copy:

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
var fruits2 = new string[fruits.Length];

Array.Copy(fruits, fruits2, 3);
```

::: tip
To copy all the items, just pass `fruits.Length` as the third argument.
:::


### `Array.IndexOf()`
This returns the `index` of an item inside the array, in our case `2` for lemon :lemon::

``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.IndexOf(fruits, "lemon");

Console.WriteLine(result); // 2
```

### `Array.Exists()`
It checks to see whether or not an item exists in an array (this accepts a `Predicate`):

``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.Exists(fruits, fruit => fruit.Contains("l"));

Console.WriteLine(result);
```

### `Array.Find()`
This simply finds an item in an array:

``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.Find(fruits, fruit => fruit.Contains("l"));

Console.WriteLine(result);
```

### `Array.FindLast()`
As the `Find` method, this starts from the **end** of the array:

``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.FindLast(fruits, fruit => fruit.Contains("l"));

Console.WriteLine(result);
```

### `Array.FindIndex()`
We can also find the index of an item by using `Predicates`:

``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.FindIndex(fruits, fruit => fruit.Contains("l"));

Console.WriteLine(result);
```

### `Array.FindAll()`
We can find all the items that respect a certain condition:

``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

var result = Array.FindAll(fruits, fruit => fruit.Contains("l"));

foreach (var fruit in result)
{
    Console.WriteLine(fruit);
}
```

### `Array.Reverse()`
We can reverse the items in an array:

``` csharp
var fruits = new[] { "melon", "coconut", "lemon" };

Array.Reverse(fruits);

foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

### `Array.Sort()`
And one of the most important, we can **sort** an array:

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
You can search for an element in a **sorted** array (you must sort the array in an ascending order before applying this algorithm):

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


### Next
If you are interested how to implement these methods procedurally (reinventing the wheel), you can read the next post:

