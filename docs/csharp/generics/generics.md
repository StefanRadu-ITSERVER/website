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


## Type safe
Generics provide a way to use data structures that are type safe. 
That means you can be sure that the items being added to the collection  are of a specific type, but the benefits go further. 
Using Generics gives you better performance and here's why. 
.NET has the concept of boxing and unboxing. 
In other words, when a value type, like an integer, has to be converted to an object,  which is what the ArrayList holds, that is called boxing.
Unboxing is when the object is converted back to a value type. 
Now, as you might imagine, this is not an efficient process. 
By telling the Generic collection, ahead of time, what the data type will be, this process can be avoided, dramatically improving performance.



## Explanation

(consider repharsing it)
Now, what makes the list different is that within these angle brackets, I can specify the data type that I want the list to hold. In this case, I'm specifying that I want the list to hold integers.

If I try to add a data type that's different than what's specified here, that error gets caught at compile time versus at runtime.

## Conclusion
This is the power of Generics.

