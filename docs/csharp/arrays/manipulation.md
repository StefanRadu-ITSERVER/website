---
title: Manipulation
---

### Adding items
We can start putting items in some positions. We can add two fruits.
``` csharp
fruits[0] = "apple";
fruits[1] = "cherry";
```
::: warning TIP
Notice that you don't have to fill **all** the positions of the array. We just add 2 even though we had 4 position available. :relieved:
:::

Let's try to add 3 more items and see what we get:
``` csharp
fruits[2] = "pineapple";
fruits[3] = "plum";
fruits[4] = "peach";
```

::: danger IndexOutOfRangeException
And we get the following error:
>System.IndexOutOfRangeException: 'Index was outside the bounds of the array.'
:::

This happend because we tried to add way to many items. The error was thrown by the third line from here:
``` csharp {3}
fruits[2] = "pineapple";
fruits[3] = "plum";
fruits[4] = "peach";
```

So, we can't change the size of the array. We can't add more items to it because we get an error. We can't do so many things :weary:

![Throwing table](https://media.giphy.com/media/dRgcwKJaGgWgo/giphy.gif)

::: tip List
This is where the Generic List comes into play :play_or_pause_button:. We are going to cover the List soon... <br/> Still, there are many use cases for the `Arrays`   and we don't just throw them in the trash because they can't resize themselves :confused:. Maybe, in some scenarios this is the exact behaviour that what we want :smiley:
:::

::: tip Remember
All collections start at index 0.
:::

So, this array has items from `fruits[0]` to `fruits[3]`.


To move on, we can remove that line. And we can iterate through the array.

