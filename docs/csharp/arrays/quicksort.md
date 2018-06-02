---
title: Quicksort
---

## Quicksort

::: warning
This is just a demonstration of the `Quicksort` algorithm. 

**.NET** comes shipped with a sorting method for arrays called `Array.Sort()`. 

See **here** my experiment comparing the following algorithm with Microsoft's.
:::

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

Let's start with an array of integers:
```csharp
var numbers = new[] { 1, 5, 0, 34, 3, 9 };
```

Which we display to the console:
```csharp
foreach (var number in numbers)
{
    Console.WriteLine(number);
}
```

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

Let's create a function called `SortArray` to which we can pass this array (we could make this as an **extension method** if we so desire). 

Nevertheless, press `Ctrl` and `.` to generate the function. 

```csharp
private static void SortArray(int[] numbers)
{

}
```

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

Inside it, I am going to call a `Quicksort` function to which I pass:
- the array
- the beginning of the array
- the end of the array

```csharp
private static void SortArray(int[] numbers)
{
    Quicksort(numbers, 0, numbers.Length - 1);
}

private static void Quicksort(int[] numbers, int left, int right)
{

}
```

::: tip Clean Code
This is a good coding practice: to have functions that implement isolated things.
:::

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>

## Implementation

Now, we can implement the **Quicksort** algorithm. 

I must say that I don't know this by heart and you shouldn't either. 

You can return to this resource anytime you want to implement a **Quicksort**.

``` csharp
private static void Quicksort(int[] numbers, int left, int right)
{
    int i = left;
    int j = right;

    var pivot = numbers[(left + right) / 2];

    while(i <= j)
    {
        while (numbers[i] < pivot)
            i++;

        while (numbers[j] > pivot)
            j--;

        if(i <= j)
        {
            var tmp = numbers[i];
            numbers[i] = numbers[j];
            numbers[j] = tmp;

            i++;
            j--;
        }
    }

    if (left < j)
        Quicksort(numbers, left, j);

    if (i < right)
        Quicksort(numbers, i, right);
}
```

So, the array is sorted ;)

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>


## Conclusion

Now, you might want to **sort** arrays of type `char`, `string` or even a **custom object**. 

Well, these functions **won't** work because they are only for **integers**, but with the power of **Generics** they can – which is coming up next. :D

<!-- ![Baby power](https://media.giphy.com/media/KTXX5iczlM1zi/giphy-downsized-large.gif) -->

::: tip Generics
Generics offer amazing code **reusability** (great to write **less** code).
:::

<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
