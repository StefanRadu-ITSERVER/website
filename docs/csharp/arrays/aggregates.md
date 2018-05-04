---
title: Aggregate Functions
---

# Arrays

This is the continuation for the Array lesson with integers.

We are going to see how to calculate the sum and the average for an array of prices.
I am going to show two ways:
1. the procedural (old) way
2. the aggregate functions (new) way

::: tip
I provided the procedural examples for you to understand what kind of happens under the hook (these are also good **exercises** :muscle:).
:::

![Gym exercise](https://media.giphy.com/media/MnrYw86as4iwo/giphy.gif)


In general in real world projects, you write procedural code only in edge cases when it's necessary.


## Exercise
We are going to use an array of prices for our example. The type of the array is inferred as `double` because we have numbers with decimal points.

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


### Max



### Min