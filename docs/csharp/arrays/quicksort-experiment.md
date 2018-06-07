# Quicksort experiment

<youtube :src="'RAlzbQYo8j8'"/>

Now, you might been thinking: _"should I use [this](/csharp/arrays/quicksort-generics.md) algorithm to sort my arrays?"_. 

Well, yes if you want that, but `.NET` comes shipped with a sorting method for arrays called `Array.Sort()` :smiley:

## Array.Sort

`Array.Sort` uses the **introspective sort** which is a combination of:
1. Insertion sort
2. Heapsort
3. Quicksort

The algorithm becomes more efficient being optimized based on it's **size** and **partitions**.

So, use `Array.Sort`. You don't have to implement anything and it's much faster than if you would.

Don't trust me? Let's experiment it ;)

![Experiment](https://media.giphy.com/media/FMCC4QgBQTBPG/giphy.gif)

[Giphy](https://giphy.com/gifs/funny-explosion-FMCC4QgBQTBPG)

## Implementation

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

You can pass a `size` (how many items), a `min` (the minimum starting value) and the `max` (the maximum ending value).

I will create `2` million numbers ranging from `0` to `500` (there are so many duplicates here :hushed:).

``` csharp
var numbers = RandomNumbers(2000000, 0, 500);
```

I will create a new `Stopwatch` to check how much time it takes. I will start it before sorting and then stop it after sorting the array, then I will print the time:

``` csharp
var watch = Stopwatch.StartNew();
SortArray(numbers);
watch.Stop();

var time = watch.ElapsedMilliseconds;
Console.WriteLine($"\nTime with Array.Sort: {time}ms");
```

And it took `365ms` to sort. 

That's good, I guess  :confused:, but let's compare this with the built-in function in C#. 

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

## Conclusion

So, as I said, the `Array.Sort` is more optimized and uses three different sorting algorithms. 

I hope you liked the experiement and my advice is to use the offered functions and not build the wheel if it's not strictly required.

You can find the source code on
[GitHub](https://github.com/danielsimionescu/csharp-quicksort-experiment).

See you guys ;)

![Bye](https://media.giphy.com/media/GB0lKzzxIv1te/giphy.gif)

[Giphy](https://giphy.com/gifs/bye-goodbye-the-little-rascals-GB0lKzzxIv1te)