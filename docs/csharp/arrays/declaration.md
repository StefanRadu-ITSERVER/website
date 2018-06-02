# Adding items

Let's see how we can add items to arrays in C#.

## Creating an Array

In this example, we will use `string` as the type for our array, but you can choose any type you want: `int`, `double`, `Object`, `array` etc.

``` csharp
string[] fruits = new string[];
```

- the square brackets `[]` show that we are dealing with an array;
- the `new` keyword shows that the variable is an `Object` (reference type).

::: danger Fixed size
Unfortunately, we need to specify the **size** of the array when we create it. 

Arrays in C# are not **dynamic**, in the sense that their **size** must be specified right at the beginning.
:::

``` csharp
string[] fruits = new string[4];
```

Now, the size is `4` which means it can hold `4` items.

::: warning Indexers
One thing to remember is that computers do **not** count like we count: 
- we start by counting from 1 (1, 2, 3...), 
- whereas computers count from 0 (0, 1, 2, 3...). :astonished:
:::

Because of that, **array indexes** range from `0` to `array.Length - 1`. 

## Adding items
We can start putting items in some positions:

``` csharp
fruits[0] = "apple";
fruits[1] = "cherry";
```

::: warning TIP
Notice that you don't have to fill **all** the positions of the array. 

We've just added `2` even though we had `4` positions available. :wink:
:::

Let's try adding `3` more items and see what we get:

``` csharp
fruits[2] = "pineapple";
fruits[3] = "plum";
fruits[4] = "peach";
```

::: danger IndexOutOfRangeException
And we get the following exception: _System.IndexOutOfRangeException: 'Index was outside the bounds of the array._'
:::

This happend because we tried to add way to many items and it was caused by adding the peach :peach::
``` csharp {3}
fruits[2] = "pineapple";
fruits[3] = "plum";
fruits[4] = "peach";
```

So, essentially, we cannot:
- change the **size** of the array;
- **add** too many items to it; 
- ...
- do so many things :weary:

![Throwing table](https://media.giphy.com/media/dRgcwKJaGgWgo/giphy.gif)
<br>
[Giphy](https://giphy.com/gifs/cheezburger-rage-anger-dRgcwKJaGgWgo)

## List

This is where the Generic `List` comes into play :play_or_pause_button:. I am going to cover it soon...

::: tip List vs Arrays
Still, there are many use cases for the arrays and we don't just throw them in the trash because they cannot `resize` themselves :confused:. 

Maybe, in some scenarios this is the exact behaviour that what we want :smiley:
:::

We can remove that line and try to display the values:

``` csharp
for(var i = 0; i < fruits.Length; i++)
{
    Console.WriteLine(i + ". " + fruits[i]);
}
```

So, this array has items from `fruits[0]` to `fruits[3]`.

## Summary
So, this is how you can add items to arrays. Next, I am going to show you a faster, shorter way of doing declaration and initialization in one line. ;)
