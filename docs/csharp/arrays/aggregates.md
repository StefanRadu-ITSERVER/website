---
title: Aggregate Functions
---

# Arrays

We are going to see how to calculate the `sum`, `average`, `min` and `max` for an array of prices.

I am going to show two ways:
1. the procedural (old) way
2. the aggregate functions (new) way

::: tip
I provided the procedural examples for you to understand what kind of things happen under the hook (these are also good **exercises** :muscle:).
:::

<!-- ![Gym exercise](https://media.giphy.com/media/MnrYw86as4iwo/giphy.gif) -->

In general in real world projects, you write procedural code only in **edge cases** when it's necessary.


## Exercise
We are going to use an array of **prices** for our example. The type of the array is inferred as `double` because we have numbers with decimal points.

``` csharp
var prices = new[] { 12, 43.5, 32, 9, 3.0 };
```

### Sum

Let's see how to calculate the sum procedurally:

``` csharp
var sum = 0d; // d for double
for (int i = 0; i < prices.Length; i++)
{
    sum += prices[i];
}
Console.WriteLine(sum);
```

But the array provides us with the `Sum` method which we can call directly:
``` csharp
var sum = prices.Sum();
Console.WriteLine(sum);
```

### Average
Let's write the procedural code to find out the average. To do this, we need to calculate the sum and then divide it by the total number of items in the array.

``` csharp
var sum = 0d;
for (int i = 0; i < prices.Length; i++)
{
    sum += prices[i];
}
var average = sum / prices.Length;
Console.WriteLine(average);
```

But, again, the array exposes the `Average` method which comes in handy:
``` csharp
var average = prices.Average();
Console.WriteLine(average);
```

### Min
Let's see what is the minimum value in the array:

``` csharp
var min = prices[0];
for (int i = 1; i < prices.Length; i++)
{
    if (prices[i] < min)
    {
        min = prices[i];
    }
}
Console.WriteLine(min);
```

But again, C# provides us with a `Min` method for arrays:

``` csharp
var min = prices.Min();
Console.WriteLine(min);
```

### Max
Let's see what is the maximum value in the array:

``` csharp
var max = prices[0];
for (int i = 1; i < prices.Length; i++)
{
    if (prices[i] > max)
    {
        max = prices[i];
    }
}
Console.WriteLine(max);
```

And we have the same thing for `Max`:

``` csharp
var max = prices.Max();
Console.WriteLine(max);
```

## Next
Let's read the final opinion on arrays.
