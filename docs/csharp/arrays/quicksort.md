---
title: Quicksort
---

## Quicksort

::: warning
This is just a demonstration of the `Quicksort` algorithm. `.NET` comes shipped with a sorting method for arrays `Array.Sort`. See **here** my experiement comparing the following algorithm with Microsoft's.
:::


Let's start simple with an array of integers which we want to sort:
```csharp
var numbers = new[] { 1, 5, 0, 34, 3, 9 };
```

And let's just display the array to the console:
```csharp
foreach (var number in numbers)
{
    Console.WriteLine(number);
}
```

So, what I want is a function called `SortArray` to which I can pass my array (we could make this an extension method as well if you so desire). Press `Ctrl` and `.` to generate the method. And I am going to do the same for a `Quicksort` function to which I pass the beginning and the end of the array besides itself as arguments.
```csharp
private static void SortArray(int[] numbers)
{
    Quicksort(numbers, 0, numbers.Length - 1);
}

private static void Quicksort(int[] numbers, int left, int right)
{

}
```

So, this is how we want it to be: to have functions that do isolated things.


And now, we can implement the Quicksort algorithm. I must say that I don't know this by heart and you shouldn't either. You can return to this resource anytime you want to implement a Quicksort. This is the implementation:
``` csharp
private static void Quicksort(int[] numbers, int left, int right)
{
    int i = left;
    int j = right;

    var pivot = numbers[left + (right - left) / 2];

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

Watch the video if you want to hear thorough explanation: **link**.

Nevertheless, the array is sorted ascendingly ;)

### Conclusion

Now, you might want to sort and array of `char` values, `strings` or even your own objects. Well, this won't work because it is for integers only, but with the **power** of **Generics** we can – coming up next.

<!-- ![Baby power](https://media.giphy.com/media/KTXX5iczlM1zi/giphy-downsized-large.gif) -->

::: tip Generics
Generics offer an amazing code reusability feature. Great to write less code.
:::
