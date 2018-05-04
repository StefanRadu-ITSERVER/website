---
title: Procedural Functions
---

## Procedural Approach

Here, I am going to show you how to procedurally implement the Array methods listed [here](/csharp/arrays/methods.md)

But, if you are curious, keep on reading! :D

## Copy
Let's copy the `contents` of one array to another:

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
var fruits2 = new string[fruits.Length];

for (int i = 0; i < fruits.Length; i++)
    fruits2[i] = fruits[i];

foreach (var fruit in fruits2)
    Console.WriteLine(fruit);
```

## IndexOf
Let's try to find the `index` of an item in an array:

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
var index = -1;
var item = "cherry";

for (int i = 0; i < fruits.Length; i++)
{
    if (fruits[i] == item)
    {
        index = i;
        break;
    }
}

Console.WriteLine(index); // 1
```

::: tip break
Once you have found the item you were looking for, you can __STOP__ the execution to make the algorithm more **efficient** (there is no need to go to the end of the array).
:::

<!-- ![Stop sign](https://media.giphy.com/media/EQZnVtaNxwLyo/giphy.gif) -->


## Exists
We can check to see if there is any element in an array based on a condition:

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
var exists = false;

for (int i = 0; i < fruits.Length; i++)
{
    if (fruits[i].Contains("l"))
    {
        exists = true;
        break;
    }
}

Console.WriteLine(exists); // True
```


## Find
We can simply find an item in an array (this returns the **first occurence**):

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
string item = null;

for (int i = 0; i < fruits.Length; i++)
{
    if (fruits[i].Contains("l"))
    {
        item = fruits[i];
        break;
    }
}

Console.WriteLine(item); // apple
```


## FindAll
We can also find **all** the items in an array that respect a certain condition:

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
var items = new string[fruits.Length];
var j = 0;

for (int i = 0; i < fruits.Length; i++)
{
    if (fruits[i].Contains("l"))
    {
        items[j] = fruits[i];
        j++;
    }
}

foreach (var item in items)
{
    Console.WriteLine(item);
}
```

## FindLast
We can find the last item that meets a condition:

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
string item = null;

for (int i = fruits.Length - 1; i >= 0; i--)
{
    if (fruits[i].Contains("l"))
    {
        item = fruits[i];
        break;
    }
}

Console.WriteLine(item); // plum
```

## FindIndex
Let's find the index of an item:

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
var index = -1;

for (int i = 0; i < fruits.Length; i++)
{
    if (fruits[i].Contains("l"))
    {
        index = i;
        break;
    }
}

Console.WriteLine(index); // 0
```

## Reverse
Let's reverse the whole array:

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
var result = new string[fruits.Length];

for (int i = fruits.Length - 1; i >= 0; i--)
{
    result[fruits.Length - i - 1] = fruits[i];
}

foreach (var item in result)
{
    Console.WriteLine(item);
}
```

## Next

I have `8` so far, but in this [post](/csharp/arrays/methods.md), there were `10`. Well, **sorting** and **searching** are more complex and they deserve separate posts.  :sweat:
