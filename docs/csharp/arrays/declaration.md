---
title: Declaring Arrays
---

# Declaring Arrays

Let's see how we can create and initialize arrays in C#.

## How to create arrays?

Basically, there are a couple of ways and semantic differences that you can use. We are going through some of them and then conclude which ones to use in the future :smirk:

So, let's use the `string` type as the type for our array (you can choose any type you want: `int`, `double`, `Object`, `array` etc.).


### Declaration
Here we declare the array:
``` csharp
string[] fruits = 
```

### Assignment
Let's assign a value to the array:

``` csharp
string[] fruits = new string[];
```

We have to use the square brackets `[]` and since an array is indeed an `Object`, it is created with the `new` statement referred to by a variable (reference type). 

::: danger Fixed size
Unfortunately, we need to specify the **size** of the array when we create it. Arrays in C# are not **dynamic** in the sense that their **size** must be specified right at the beginning.
:::

Let's specify the size (or the capacity – same thing) for our array:

``` csharp
string[] fruits = new string[4];
```

So this array has the size `4` which means it can hold `4` items.

::: warning Indexers
One thing to remember is that computers don't count like we count: we start by counting from 1 (1, 2, 3...), whereas computers count from 0 (0, 1, 2, 3...). This is how computers count :astonished:
:::

So, array indexes range from `0` to `array.Length - 1`. 

Nevertheless, let's continue.

## How to add items?
We can start putting items in some positions by adding two fruits:

``` csharp
fruits[0] = "apple";
fruits[1] = "cherry";
```

::: tip Remember
All collections start at index 0. This is where we put our apple :apple:.
:::

::: warning TIP
Notice that you don't have to fill **all** the positions of the array. We've just added `2` even though we had `4` position available. :wink:
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

This happend because we tried to add way to many items. The error was thrown by the third line with the peach :peach::
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

This is where the Generic `List` comes into play :play_or_pause_button:. We are going to cover it soon...

::: tip List vs Arrays
Still, there are many use cases for the `Arrays` and we don't just throw them in the trash because they can't `resize` themselves :confused:. Maybe, in some scenarios this is the exact behaviour that what we want :smiley:
:::

---

To move on, we can remove that line and iterate through the array to display its values:

``` csharp
for(var i = 0; i < fruits.Length; i++)
{
    Console.WriteLine(fruit[i]);
}
```

Now, this array has items from `fruits[0]` to `fruits[3]`.


### `Array.Resize()` method
There is a method called `Resize` which might do what it expresses through its name: to resize (change the **size**) of the array. But we said that the array it's **immutable** :fearful:. 


Well, this statement still holds true. What the `Resize` method does is that it's another array in the background and reassigns it to our array variable. So, it's not changing the array. Is this a **perfomance** issue? Certainly!

Let's see how it works. I want to remove half of the items for the array:

``` csharp
int[] numbers = new int[] { 23, 25, 64, 7, 5, 3, 2, 43, 53, 32 };
Console.WriteLine(numbers.Length); // 10

Array.Resize(ref numbers, 5);
Console.WriteLine(numbers.Length); // 5
```

> The Resize method allocates a new array with the specified size, copies elements from the old array to the new one, and then replaces the old array with the new one.

You can read it for youself [here](https://msdn.microsoft.com/en-us/library/bb348051(v=vs.110).aspx#Anchor_2)


## Summarry
So, this is how you can create arrays. In the next post I am going to show you a faster, shorter way of doing declaration and initialization. ;)
