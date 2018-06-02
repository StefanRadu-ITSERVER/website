# Count Factorials

**Counting the factorials of a number in C#**

Let's calculate the total factors of a number:

> A positive integer D is a factor of a positive integer N if there exists an integer M such that N = D * M.

I am going to declare a method called `CountFactors` which returns the total number of factors:

``` cs
public static int CountFactors(int number)
{

}
```

Now, we need a `counter` variable which counts the factors:

``` cs
var counter = 0;
```

Since factors come in pairs (of two obviously), we don't need to count for each of them separately. Because of that, we can check only for the numbers below the square root of the `number`:

``` cs
var limit = (int)Math.Sqrt(number);
```

If that `i` is a factor of the `number` (meaning the rest of the division is `0`), then we can increment the `counter` by `2` (remember: pair of factorials):

``` cs
for (var i = 1; i <= limit; i++)
{
    if (number % i == 0)
    {
        counter += 2;
    }
}
```

Now, when the middle number is a factorial, then we don't need to increment the `counter` by two (this is the only case when it's only one). So, we need to decrement `1` separately if that's the case:

``` cs
if (limit == Math.Sqrt(number))
{
    counter--;
}
```

And then return the `counter`:

``` cs
return counter;
```

This is the full method:

``` cs
public static int CountFactors(int number)
{
    var counter = 0;
    var limit = (int)Math.Sqrt(number);

    for (var i = 1; i <= limit; i++)
    {
        if (number % i == 0)
        {
            counter += 2;
        }
    }

    if (limit == Math.Sqrt(number))
    {
        counter--;
    }

    return counter;
}
```

And we can call it for `24` and we get a correct result of `8`:

``` cs
var result = CountFactors(24);
Console.WriteLine(result); // 8
```

Why `8`?
Because the factors of `24` are: 1, 2, 3, 4, 6, 8, 12, 24.

The **complexity** of this algorithm is `O(sqrt(N))`.

In JavaScript, you need to:
- replace
``` cs
var limit = (int)Math.Sqrt(number);
```
with
``` js
var limit = parseInt(Math.sqrt(number));
```
- replace the `==` with `===` in both conditions.


### Others

Here's another solution, but it doesn't perform well with huge numbers:

``` cs
public static int CountFactors(int number)
{
    var i = 1;
    var counter = 0;

    while (i * i < number)
    {
        if (number % i == 0)
        {
            counter += 2;
        }
        i++;
    }

    if (number == i * i)
    {
        counter++;
    }

    return counter;
}
```

In JavaScript, replace the `==` with `===` in both conditions.
