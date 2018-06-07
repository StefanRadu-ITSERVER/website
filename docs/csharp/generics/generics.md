# Non-Generics vs Generics

## Non-Generics
We are going to look at the ArraList which is **Non-Generic**.

For this example, we need to create a custom class called **Song**.

Let's create a variable song:

``` csharp
var song = new Song()
{
    Artist = "twenty one pilots",
    Name = "Lane Boy"
};
```

Then, hover over `Song`, press `Ctrl + .` and then *Generate Class Song*.

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

Then, we can create an array variable in which we add all sorts of items:

``` csharp
var array = new ArrayList
{
    21,
    song,
    "computer",
    true
};
```

Let's print the values of the array:

``` csharp
foreach (var item in array)
{
    Console.WriteLine(item);
}
```

Now this works, but what about printing the `Name` property of the song?

If we do the casting directly, the program will crash when the item is not a `Song`:

``` csharp
foreach (var item in array)
{
    Console.WriteLine(((Song)item).Name);
}
```

::: warning 
Notice the extra set of parantheses surrounding `(Song)item`.
:::

To fix this, we can check to see if the current item is a `Song` object and then we can try to print its `Name`. 

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

Well, you can see how difficult it became to operate on items. 

Indeed, we have flexibility to add any item we want, but in the long run it's not maitainable.

This code is prone to errors.

## Generics

This is where we have **Generics**. Let's create a list of type `Song`.

``` csharp
var list = new List<Song>();
```

Now, to this list we can add only songs:

``` csharp
var list = new List<Song>
{
    //21, // error
    song
};
```

::: tip
We get now compile time errors (before we execute the code) when we add something wrong.
:::

We can now get the `Name` attribute of the song directly without casting:

``` csharp
foreach (var item in list)
{
    Console.WriteLine(item.Name);
}
```

## Conclusion
This is the power of Generics.
