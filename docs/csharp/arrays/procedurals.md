# Procedurals

I am going to show you how to **procedurally** implement the **array methods** listed [here](/csharp/arrays/methods.md)

Again, you should not reinvent the wheel. These methods are built-in C#, but if you are curious, let's see them! :smirk:

## IndexOf

First up, we are going to see the **IndexOf** method :satisfied:

<youtube :src="'kZps2nFAA8A'"/>

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

Let's see how to implement **Exists**

<youtube :src="'wFrhJQuQv0E'"/>

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

Can we find an item in an array? :smirk:

<youtube :src="'SE-XW_TqiNw'"/>

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

Let's go from the end to the beginning :grin:

<youtube :src="'D5VIzIA80dA'"/>

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

We might want to find teh index of an item, right? :smile:

<youtube :src="'k6Is2QJI5Ww'"/>

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

Let's get multiple items ;)

<youtube :src="'Mlb0zxhW6yI'"/>

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

We might need some reversing as well :grimacing:

<youtube :src="'uQ1R9JNJ9z0'"/>

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

And the last one :satisfied:

<youtube :src="'iWWiacm6wU0'"/>

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
