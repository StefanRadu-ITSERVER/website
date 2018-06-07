# Generic Quicksort

<youtube :src="'gCE108OWnro'"/>

I am going to make the `Quicksort` method from this [post](/csharp/arrays/quicksort.md) Generic:
- use the `T` type, 
- add the condition that it must implement the `IComparable` interface 
- make use of the `CompareTo` method
- rename the `numbers` parameter to `array`.

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

Rename the array in the other function as well:

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

``` csharp
SortArray(numbers);
SortArray(letters);
SortArray(names);
```

To keep our code DRY, I want to extract the "print array" code to another function:

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

We can now display the content of the arrays like this:

``` csharp
PrintArray(numbers);
PrintArray(letters);
PrintArray(names);
```
And this works wonders :D

## Custom class

Let's try with our own `class`. 

I am going to create a class `Book` which has only one property called `ISBN` (based on this property, we are going to compare books because two books are equal if they have the same `ISBN`. Am I right?).

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
My intent is to show you how to implement `IComparable` and how to think about it. This interface isn't that difficult and using it is a breeze.
:::

Then we can just sort it and display it:

``` csharp
...
SortArray(books);
...
PrintArray(books);
```

Wonderful :)

You can find the source code on
[GitHub](https://github.com/danielsimionescu/csharp-quicksort).

## Conclusion
But should we use this approach? I don't recommend so. Let's see why in our next experiment.
