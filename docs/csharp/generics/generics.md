# Generics vs Non-Generics

<youtube :src="'5xz1sn06NoE'"/>

## Non-Generics
We are going to create an `ArrayList` which is **Non-Generic**.

Let's create an **array variable** to which we add all sorts of items:

``` csharp
var array = new ArrayList
{
    21,
    "computer",
    true
};
```

But what about adding an **object**?

For this example, we need to create a custom class called **Song**.

Firstly, let's create a variable called `song`:

``` csharp
var song = new Song()
{
    Artist = "twenty one pilots",
    Name = "Lane Boy"
};
```

Then, hover over the `Song` class, press `Ctrl + .`, and then choose to *Generate Class Song*.

This will generate the following code:

``` csharp
internal class Song
{
    public Song()
    {
    }

    public string Artist { get; set; }
    public string Name { get; set; }
}
```

And we can add it to the array.

``` csharp
array.Add(song);
```

Let's print the values of the array:

``` csharp
foreach (var item in array)
{
    Console.WriteLine(item);
}
```

### Limitations

Now this works, but what about printing the `Name` property of the song?

If we do the casting directly, the program will crash when the item is not a `Song`:

``` csharp
foreach (var item in array)
{
    Console.WriteLine(((Song)item).Name);
}
```

::: warning 
Notice the extra set of parantheses surrounding `(Song)item`
:::

To fix this, we can check to see if the current item is a `Song` object and then we can try to print its `Name` property.

``` csharp
foreach (var item in array)
{
    if (item is Song)
    {
        Console.WriteLine(((Song)item).Name);
    }
}
```

We can do this with the `as` operator as well, but we need to introduce a new variable:

``` csharp
foreach (var item in array)
{
    if (item is Song)
    {
        var songItem = item as Song;
        Console.WriteLine(songItem.Name);
    }
}
```

So, you can see how **difficult** it became to operate on individual items. 

Indeed, we have **flexibility** to add any item we want, but in the long run it's not **maintainable**. This code is prone to errors.

## Generics

This is where we have **Generics**. 

Let's create a list of type `Song`.

``` csharp
var list = new List<Song>();
```

To this list, we can add only `Song` objects:

``` csharp
var list = new List<Song>
{
    //21, // error
    song
};
```

::: tip
Now, we get compile time errors (meaning before we execute the code) when we add something wrong to a collection.
:::

Let's get the `Name` property of the song directly without casting:

``` csharp
foreach (var item in list)
{
    Console.WriteLine(item.Name);
}
```

## Conclusion
This is the power of Generics.
