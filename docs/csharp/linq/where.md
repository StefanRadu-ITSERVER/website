# Where

For sure you have come across the need of filtering a collection based on a certain criteria.

In C#, you can easily filter a collection by calling the `.Where` extension method
on that specific collection. 

It filters a collection based on a predicate (in the following examples, I used a Lambda Expression).

::: tip Predicate
A predicate is a function that tests each element of a collection based on a condition and returns true or false.
:::

``` csharp
var numbers = new List<int> { 2, 32, 11, 1, 24, 7 };

var evenNumbers = numbers
    .Where(number => number % 2 == 0);

foreach (var number in evenNumbers)
{
    Console.WriteLine(number);
}
```

The type of the result is `IEnumerable<T>` and contains all the elements that statisfy the condition.


::: tip
The `Where` method can also accept a second parameter which represents the index of that current element.
:::

``` csharp
var evenNumbersAtEvenPositions = numbers
    .Where((number, index) => number % 2 == 0 && index % 2 == 0);

foreach (var number in evenNumbersAtEvenPositions)
{
    Console.WriteLine(number);
}
```

One important thing to notice here is that the `Where` method doesn't change the input collection. This returns a new collection.

It is not very efficient considering the usage of memory: we work with two collections instead of just one.

If you are concerned that this is an issue, then we can solve this problem another way.

We can shift the logic a little bit of how we can filter a collection.

The logic we did before was to go through the collection and if an item satisfies the criteria, we add it in a new collection.

What about changing the logic so that instead of saving to a new collection, we remove the ones which don't satisfy the criteria?

In this way we skip the exact items that meet the condition.

Let's see how:

``` csharp
for (var i = 0; i < numbers.Count; i++)
{
    if (numbers[i] % 2 != 0)
    {
        numbers.RemoveAt(i);
        i--;
    }
}

numbers.ForEach(Console.WriteLine);
```

In this way, we filter a collection, but logically different.


## Differed execution
This method returns a query which is not executed until you call `GetEnumerator` or loop through it with a `foreach`.


::: tip Shortly
This approach removes the unnecessary items from the collection,
rather than creating a new one.

This is called that we operate on the collection in place.
:::
