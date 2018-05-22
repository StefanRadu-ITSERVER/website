---
title: Iteration
---

# Iterating over Arrays

Let's see how we can iterate over C# arrays. 

But first, we need to look at the `Length` property.

## `Length` property

You can find **how many** items are in an array by accessing its `Length` property:

``` csharp
var fruits = new string[] { "watermelon", "peach", "lemon" };
var length = fruits.Length;
Console.WriteLine(length); // 3
```

::: tip Count method
The array exposes the `Count()` method as well, but the `Length` property is faster, so consider using it over the method.
:::

## Iteration
We can use the `for` loop to iterate, or we can just use `foreach`.

### `for` loop
1. using the `for` loop:
``` csharp
for (int i = 0; i < fruits.Length; i++)
{
    Console.WriteLine(fruits[i]);
}
```

### `foreach` loop
2. using the `foreach` loop:
``` csharp
foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

::: tip foreach
You can iterate through arrays using `foreach` because they implement the `IEnumerable` interface.
:::

When we execute any of these, we get this result:

```
watermelon
peach
lemon

Press enter to stop execution.
```
Pretty nice :)

![Michelle nice](https://media.giphy.com/media/AGOPaltgJ2pBC/giphy.gif)
<br>
[Giphy](https://giphy.com/gifs/thumbs-up-michelle-obama-cool-story-bro-AGOPaltgJ2pBC)

::: tip Loops
My reccomendation is to use `foreach` over `for` when looping, but this depends on the scenario: if you need to use the index somehow, then you should use the `for` loop, if it's just a simple looping through the items, then use `foreach`. :+1:
:::

## Nulls
Let's try removing the last two items:

``` csharp
var fruits = new string[] { "watermelon" };
```

If we run now our code, you can see that we still have 
- the watermelon :watermelon:;
- and some empty lines with no values.

```
watermelon



Press enter to stop execution.
```

::: tip Default values
Well, in fact these are not empty. There is a difference between `null` and `empty` (coming soon). 

In essence, when you don't assign a value to a position in the array, that position gets the `default value` of the type of the array (in our case it gets `null` because the type of the array is `string` and the default value of `string` is `null`).
:::

Let's try checking for `null` values to see if these are indeed `null`:

``` csharp
foreach (var fruit in fruits)
{
    if (fruit == null)
        Console.WriteLine("This was null");
    else 
        Console.WriteLine(fruit);
}
```

And we can see in the result that we have indeed `null` values:

```
watermelon
This was null
This was null

Press enter to stop execution.
```

::: tip
The compiler just doesn't print `null` to the console. It prints nothing, but we as programmers know that those are in fact `null` values. :satisfied:
:::

## Wrapping up

Amazing, you know about **default values** and **looping** over arrays.

I am going to cover all the other **default values** soon, so keep an eye on my [channel](https://www.youtube.com/channel/UCPIe87uLDW-QZ5FnUZqdxoA) and on this website :upside_down_face:

