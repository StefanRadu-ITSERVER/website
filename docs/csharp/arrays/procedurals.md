# Procedurals

I am going to show you how to **procedurally** implement the **array methods** listed [here](/csharp/arrays/methods.md)

Again, you should not reinvent the wheel. These methods are built-in C#, but if you are curious, let's see them! :smirk:

## IndexOf
Let's try to find the **index** of an item in an array:

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
Once you find the item you are looking for, you can __STOP__ the execution to make the algorithm more **efficient** (there is no need to go to the end of the array).
:::

![Stop sign](https://media.giphy.com/media/EQZnVtaNxwLyo/giphy.gif)

[Giphy](https://giphy.com/gifs/woman-stop-weather-EQZnVtaNxwLyo)

## Exists
We can check to see if an item **exists** in an array based on a condition:

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
We can simply find an item in an array (this returns the **first occurrence**):

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
string item = null;

for (int i = 0; i < fruits.Length; i++)
{
    if (fruits[i].Contains("r"))
    {
        item = fruits[i];
        break;
    }
}

Console.WriteLine(item); // cherry
```

## FindLast
We can find the **last** item that meets a condition:

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
Let's find the **index** of an item based on a condition:

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

## FindAll
We can also find **all** the items in an array that respect a certain condition:

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
var result = new string[fruits.Length];
var j = 0;

for (int i = 0; i < fruits.Length; i++)
{
    if (fruits[i].Contains("p"))
    {
        result[j] = fruits[i];
        j++;
    }
}

foreach (var item in result)
{
    Console.WriteLine(item);
}
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

## Copy
Let's copy the **items** of one array to another:

``` csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
var result = new string[fruits.Length];

for (int i = 0; i < fruits.Length; i++)
    result[i] = fruits[i];

foreach (var fruit in result)
    Console.WriteLine(fruit);
```

## Up Next

I have `8` so far, but in this [post](/csharp/arrays/methods.md), there were `10`. Well, **sorting** and **searching** are more complex and they deserve separate posts.  :sweat:
