---
title: Quicksort
---

## Quicksort

::: warning
This is just a demonstration of the Quicksort algorithm. `.NET` comes shipped with a sorting method for arrays `Array.Sort`. See **here** my experiement comparing the following algorithm with theirs.
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


Now, you might want to sort and array of `char` values, `strings` or even your own objects. Well, this won't work because it is for integers only, but with the power of **Generics** (which offer less code).

![Baby power](https://media.giphy.com/media/KTXX5iczlM1zi/giphy-downsized-large.gif)

So, I am going to make the `Quicksort` method generic first with the `T` type, add the condition that the type must implement `IComparable` and make use of the `CompareTo` method:

``` csharp
private static void Quicksort<T>(T[] array, int left, int right) where T : IComparable<T>
{
    int i = left;
    int j = right;

    var pivot = array[left + (right - left) / 2];

    while(i <= j)
    {
        while (array[i].CompareTo(pivot) < 0)
            i++;

        while (array[j].CompareTo(pivot) > 0)
            j--;

        if(i <= j)
        {
            var tmp = array[i];
            array[i] = array[j];
            array[j] = tmp;

            i++;
            j--;
        }
    }

    if (left < j)
        Quicksort(array, left, j);

    if (i < right)
        Quicksort(array, i, right);
}
```

Also, I renamed the `numbers` parameter to `array`.

I will do the same for the `SortArray` function:

``` csharp
private static void SortArray<T>(T[] array) where T : IComparable<T>
{
    Quicksort(array, 0, array.Length - 1);
}
```

And that's it :D It works again with numbers. Let's create two more arrays: one with `chars` one with `strings`:

```csharp
var letters = new[] { 'f', 'g', 'a', 'm', 'o' };
var names = new[] { "Peter", "Alex", "John", "Fred" };
```

Then we sort each one of them:

            SortArray(numbers);
            SortArray(letters);
            SortArray(names);


          


To keep our code DRY, I want to extract the "print array code" to another function:

![Raisins](https://media.giphy.com/media/unVuwnL0UyHUk/giphy.gif)

``` csharp
public static void PrintArray<T>(T[] array)
{
    foreach (var element in array)
    {
        Console.WriteLine(element);
    }
    Console.WriteLine();
}
```

We can now display the content of arrays like this:
``` csharp
PrintArray(numbers);
PrintArray(letters);
PrintArray(names);
```
And this works wonders :D

Let's try with our own class. I am going to create a class `Book` which has only one property called `ISBN` (based on this property, we are going to compare books because two books are equal if they have the same `ISBN`. Am I right?).

![Whitney](https://media.giphy.com/media/BZjZpr8tP8lVe/giphy.gif)

``` csharp
class Book : IComparable<Book>
{
    public string ISBN { get; set; }

    public Book(string isbn)
    {
        ISBN = isbn;
    }

    public int CompareTo(Book other)
    {
        return ISBN.CompareTo(other.ISBN);
    }

    public override string ToString()
    {
        return ISBN;
    }
}
```

Then, I am going to create an array of books. I won't create a proper ISBN, just some dumb ones:
``` csharp
var books = new[] { new Book("4ds"), new Book("2er"), new Book("31") };
```

::: tip
My intent was to show you how to implement `IComparable` and how to think about it.
:::


Then we can just sort it and display it:
``` csharp
...
SortArray(books);
...
PrintArray(books);
```

Wonderful :)



Now, you might been thinking: "should I use this algorithm to sort my arrays?". Well, yes if you want that, but `.NET` comes shipped with a sorting method for arrays: `Array.Sort()`.


`Array.Sort` uses the **introspective sort** which is a combination of:
1. Insertion sort
2. Heapsort
3. Quicksort

The algorithm becomes more efficient being optimized based on it's size and partitions.

So, use `Array.Sort`. You don't have to implement anything and it's much faster than if you would.

Don't trust me? Let's experiment it ;)

![Experiment](https://media.giphy.com/media/FMCC4QgBQTBPG/giphy.gif)

---

I am going to create a function to return an array of random integers:
``` csharp
private static int[] RandomNumbers(int size, int min, int max)
{
    var array = new int[size];
    var random = new Random();

    for (int i = 0; i < size; i++)
        array[i] = random.Next(min, max);

    return array;
}
```
You can pass a `size` (how many items), a `min` (the minimum starting value) and the `max` (the maximum starting value).

I will create 2 million numbers from 0 to 500 (there are so many duplicates here :hushed:).

``` csharp
var numbers = RandomNumbers(2000000, 0, 500);
```

I will create a new `Stopwatch` to check how much time it takes. I will start it before sorting and then after sorting the array, then I will print the time:

``` csharp
var watch = Stopwatch.StartNew();
Array.Sort(numbers);
watch.Stop();

var time = watch.ElapsedMilliseconds;
Console.WriteLine($"\nTime with Array.Sort: {time}ms");
```

And it took `365ms` to sort. That's good, I guess, but let's compare this with the built-in function in C#. 

I will copy all the random numbers into another array because I want to have the same numbers to work with. And then, I will just use the same `StopWatch` to track both intervals:

``` csharp
var numbers = RandomNumbers(2000000, 0, 500);
var copy = new int[2000000];
Array.Copy(numbers, copy, 2000000);

var watch = Stopwatch.StartNew();
SortArray(numbers);
watch.Stop();

var time = watch.ElapsedMilliseconds;
Console.WriteLine($"\nTime with SortArray: {time}ms");

watch = Stopwatch.StartNew();
Array.Sort(copy);
time = watch.ElapsedMilliseconds;
Console.WriteLine($"\nTime with Array.Sort: {time}ms");
```

Here's the result:
```
Time with SortArray: 362ms

Time with Array.Sort: 145ms
```

Well, not even close, more than twice that time, more exactly `2.496...` times more.

### Refactoring

To not repeat ourselves (DRY), we can refactor our code by extracting a function for the `Stopwatch`:

``` csharp
private static void PrintExecutionTime(Action action)
{
    var watch = Stopwatch.StartNew();
    action.Invoke();
    watch.Stop();

    var time = watch.ElapsedMilliseconds;
    Console.WriteLine($"\nTime with SortArray: {time}ms");
}
```

And we can call this function with by constructing a `Lambda expression` with the sort calls:

``` csharp
PrintExecutionTime(() => SortArray(numbers));
PrintExecutionTime(() => Array.Sort(copy));
```


So, as I said, the `Array.Sort` is more optimized and uses three different sorting algorithms. 

I hope you liked the experiement and my advice is to use the offered functions and not build the wheel if it's not strictly required.

See you guys ;)

![Bye](https://media.giphy.com/media/GB0lKzzxIv1te/giphy.gif)


