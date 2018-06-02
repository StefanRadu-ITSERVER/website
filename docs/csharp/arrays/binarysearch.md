# Binary Search

::: tip
You don't have to implement this yourself, you can use the built-in method showed [here](/csharp/arrays/methods.html#array-binarysearch).
:::

In order to `Binary Search` an array, it has to be sorted. You can simply use the `Array.Sort` method (which I am going to use in this example). 

If you are curious how to sort arrays, then check this [post](/csharp/arrays/quicksort.md).

## Implementation

Let's create an array with numbers and sort it:

``` csharp
var numbers = new[] { 1, 5, 0, 34, 3, 9 };
Array.Sort(numbers);
```

## Linear Search
Before implementing the `Binary Search`, let's see the `Linear Search`:

``` csharp
private static int LinearSearch(int[] array, int item)
{
    for (int i = 0; i < array.Length; i++)
    {
        if (array[i] == item)
        {
            return i;
        }
    }
    return -1;
}
```

And let's call it to find the position of value `3`:

``` csharp
var index = LinearSearch(numbers, 3);
Console.WriteLine(index);
```

::: danger Efficiency
The reason we want to implement `Binary Search` is because it's much much faster than a simple `Linear Search`.
:::

## Binary Search

So, let's implement the `Binary Search`:

``` csharp
private static int BinarySearch(int[] array, int item)
{
    int left = 0;
    int right = array.Length - 1;

    while (left <= right)
    {
        var middle = (left + right) / 2;

        if (array[middle] == item)
            return middle;

        if (item < array[middle])
            right = middle - 1;
        else
            left = middle + 1;
    }

    return -1;
}
```

And we call to search the same value:

``` csharp
var index = BinarySearch(numbers, 3);
Console.WriteLine(index);
```

## Recursion

But there is a quote:
> To iterate is human, to recurse divine (L Peter Deutsch)

We need to be smarter :smirk:

So, let's implement this `Binary Search` as a **recursive** function (a function that calls itself). In this way, we can remove our `while` loop:

``` csharp
private static int BinarySearchRecursive(int[] array, int left, int right, int item)
{
    if (right >= left)
    {
        int middle = left + (right - left) / 2;

        if (array[middle] == item)
            return middle;
        
        if (array[middle] > item)
            return BinarySearchRecursive(array, left, middle - 1, item);
        
        return BinarySearchRecursive(array, middle + 1, right, item);
    }
    
    return -1;
}
```

Then, because I want to call it simply as before, I will create an overloaded version of `BinarySearchRecursive`:

``` csharp
private static int BinarySearchRecursive(int[] array, int item)
{
    return BinarySearchRecursive(array, 0, array.Length - 1, item);
}
```

Let's call the function:

``` csharp
var index = BinarySearchRecursive(numbers, 3);
Console.WriteLine(index);
```

## Summary
So, this is **Binary Search**. ;)

You can find the source code on [GitHub](https://github.com/danielsimionescu/csharp-binarysearch).
