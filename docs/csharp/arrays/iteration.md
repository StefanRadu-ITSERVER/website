---
title: Iteration
---

## Iterating over C# Arrays

Let's see how we can iterate over C# arrays. But first, we need to look at the `Length` property.



### `Length` property

You can find **how many** items are in an array by accessing its `Length` property:

``` csharp
var length = fruits.Length;
Console.WriteLine(length);
```

::: tip Count method
The array exposes the `Count()` method as well, but the `Length` property is faster, so consider using it over the method.
:::

### Iteration
We can use the `for` loop to iterate, or we can just use `foreach`.

::: tip foreach
You are able to iterate through arrays using the `foreach` loop because they implement the `IEnumerable` interface.
:::

Here are both ways:

1. using the `for` loop:
``` csharp
for (int i = 0; i < fruits.Length; i++)
{
    Console.WriteLine(fruits[i]);
}
```

2. using the `foreach` loop:
``` csharp
foreach (var fruit in fruits)
{
    Console.WriteLine(fruit);
}
```
When we execute any of these, we get this result:
```
apple
cherry
pineapple
plum

Press enter to stop execution.
```
Pretty nice :)

<!-- ![Michelle nice](https://media.giphy.com/media/AGOPaltgJ2pBC/giphy.gif) -->

::: tip Loops
My reccomendation is to use `foreach` over `for` when looping, but this depends on the scenario: if you need to use the index somehow, then you should use the `for` loop, if it's just a simple looping through the items, use `foreach`. :+1:
:::


### Null
Let's try to comment the last two items:
``` csharp
fruits[0] = "apple";
fruits[1] = "cherry";
//fruits[2] = "pineapple";
//fruits[3] = "plum";
```

If we run now our code, you can see some new lines with no values:

```
apple
cherry



Press enter to stop execution.
```

::: tip Default values
Well, in fact these are not empty. There is a difference between `null` and `empty` (coming soon). But, in essence, when you don't assign a value to a position in the array, that position gets the `default value` of the type of the array (in our case it gets `null` because the type of the array is `string`).
:::

Let's try to check for `null` values to see if there are indeed `null` values:

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
apple
cherry
This was null
This was null

Press enter to stop execution.
```

::: tip
The compiler just doesn't print `null` to the console. It prints nothing, but we as programmers know that those are in fact null. :satisfied:
:::

So, now, you know about `default` values. I am going to cover all the other `default values` soon, so keep an eye on my channel and on this website :upside_down_face:

