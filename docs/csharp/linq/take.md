# Take

## Usage

C# offers the .Take() extension method which, as its name implies, takes the first 'n' elements from a collection.

`Take` method:
- returns a specified number of elements from the start of a collection.
- it returns an `IEnumerable<T>` that contain the elements specified as above.
- if the parameter is less than or equal to zero, an empty `IEnumerable<T>` is returned.

#### How to take the first 'n' items from a collection?

``` csharp
var numbers = new List<int> { 2, 32, 11, 1, 24, 7 };
var top = 3;

var firstNumbers = numbers
    .Take(top);
```

But this is not memory-efficient due to the fact that through the .Take() method
the compiler creates in memory a new collection and returns it.

We can avoid that by chaging the logic: instead of using the .Take() method, we can 
operate on the input collection by removing the elements whose index exceeds the 'top' value.

In this way, our collection will contain only the first 'top' items.

But, I need to make a remark.
We cannot use 'for' loop like this:

``` csharp
for (var i = top; i < numbers.Count; i++)
{
    numbers.RemoveAt(top);
}
```

Why? Well because as you remove, the number of items in the list shrinks
and the collection.Count() will also shrink and you end up having more elements 
because the i indexer is still growing when you remove items.

So, here are three ways of how to do this; preferably choose the first one:

1. by using a 'while' loop:

``` csharp
while (numbers.Count != top)
{
    numbers.RemoveAt(top);
}
```

2. by keeping the length unchanged:

``` csharp
var end = numbers.Count;
for (var i = top; i < end; i++)
{
    numbers.RemoveAt(top);
}
```

3. by not incrementing the indexer:

``` csharp
for (var i = top; i < numbers.Count; i++)
{
    numbers.RemoveAt(i);
    i--;
}
```

## Differed execution
This method returns a query which is not executed until you call `GetEnumerator` or loop through it with a `foreach`.

