---
title: Declaration
---

## Arrays in C#

We are going to learn about creating and initializing arrays in C#.

## How to create arrays?

Let's see how we can create an array in C#. Basically, there are a couple of ways and semantic differences that you can use. We are going through some of them and then conclude which ones to use in the future :smirk:

So, let's use the `string` type as the type for the array (but you can make it as any type as you want: `int`, `double`, `Object`, `array` etc.).


### Declaration
Here we declare the array:
``` csharp
string[] fruits = 
```

### Assignment
Here we assign a value to the array:
``` csharp
string[] fruits = new string[];
```
We have to use the square brackets `[]` and since an array is indeed an `Object` it is created with the `new` statement referred to by a variable (by reference). 

::: danger Error
Unfortunately, we need to specify the size of the array when we create it. Arrays in C# are not **dynamic** in the sense that their size must be specified right at the beginning.
:::

Let's specify the size (or the capacity – same thing):
``` csharp
string[] fruits = new string[4];
```
So this array has the size 4 which means it can hold 4 items (we can put 4 items inside of it).

::: warning Indexers
One thing to remember, computers don't count like we count: we start by counting from 1 (1, 2, 3...), whereas computers count from 0 (0, 1, 2, 3...). This is how computers count :astonished:
:::

So, the the indexes range from 0 to array.Length - 1.


Nevertheless, let's continue.

### Object initializer

We can declare, assign and initialize the array at once. So, there is no need for us to write assignment on different lines. This is the the **object initializer** shines: <br> <br>
![Shining](https://media.giphy.com/media/3VSM58Eu7kR4A/giphy.gif)

``` csharp
string[] fruits = new string[4] { "apple", "cherry", "pineapple", "plum" };
```

We can also leave out the size because the compiler is smart enough to infer (know) that. So, we can remove `4`:

```csharp
string[] fruits = new string[] { "apple", "cherry", "pineapple", "plum" };
```

Well, this inteligence of the compiler can lead us to other places as well :nerd_face:. Because the compiler can inferre many things, we can simplify the way we create arrays:

1. we can leave out the type (in our case `string`):
```csharp
string[] fruits = new[] { "apple", "cherry", "pineapple", "plum" };
```

2. we can also leave out the `new[]` altoghether:
```csharp
string[] fruits = { "apple", "cherry", "pineapple", "plum" };
```

3. or we can make use of the `var` keyword. In this case, we need to speficy the `new` keyword.
```csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
```

::: tip Implicitly Typed Arrays
These arrays are called Implicitly Typed Arrays because their type is inferred based on the assignment. They are great for object initializers and anonymous types.
:::


Number two works because on the left side of the declaration we defined the type (`string[]`). But if we use `var` there is no way for the compiler to know what is the type assignment.

::: tip Choices
So, which one to use? I recommend using the third option because it makes use of the `var` keyword and it makes writing code faster. Still, if you want to tell that those are indeed strings, you can specify that with `new string[]`. It's up to you how much clarity you need to convey in your code. :blush:
:::

Here I conclude my thoughts about array creating in C#. I will continue with methods that you can use with arrays and I am going to switch to the `int` type, but remember any type can work with arrays: `string`, `int`, `char`, `Object` etc.


#### `Resize` method
There is a method called `Resize` which might do what it expresses through its name: to resize (change the size) of the array. But we said that the array it's immutable :fearful:. 
<br>
Well, the statement still hold true. What the Resize method does is that it's creating another array in the background and reassigning it to our array variable. So, it's not changing the array. Is this a perfomance issue? Certainly!

``` csharp
int[] numbers = new int[] { 23, 25, 64, 7, 5, 3, 2, 43, 53, 32 };
Console.WriteLine(numbers.Length); // 10

Array.Resize(ref numbers, 5);
Console.WriteLine(numbers.Length); // 5
```

> The Resize method allocates a new array with the specified size, copies elements from the old array to the new one, and then replaces the old array with the new one.

You can read it for youself [here](https://msdn.microsoft.com/en-us/library/bb348051(v=vs.110).aspx#Anchor_2)
