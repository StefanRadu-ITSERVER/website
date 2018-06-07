# Object Initializer

Let's use **object initializers** with arrays :grin:

<youtube :src="'TxmJnoW8Fd8'"/>

We can declare, assign and initialize the array at once to avoid writing assignments as separate operations. 

This is where the **object initializer** shines: 

![Shining](https://media.giphy.com/media/3VSM58Eu7kR4A/giphy.gif)

[Gihpy](https://giphy.com/gifs/3VSM58Eu7kR4A)

``` csharp
string[] fruits = new string[4] { "apple", "cherry", "pineapple", "plum" };
```

We can also leave out the **size** because the compiler is smart enough to infer/know that. 

So, we can remove `4`:

```csharp
string[] fruits = new string[] { "apple", "cherry", "pineapple", "plum" };
```

### Other approaches

Well, this intelligence of the compiler can lead us to other places as well :nerd_face:. 

Because the compiler can infer many things, we can simplify the way we create arrays.

1. we can leave out the **type** (in our case `string`):

```csharp
string[] fruits = new[] { "apple", "cherry", "pineapple", "plum" };
```

2. we can also leave out the `new[]` altogether:

```csharp
string[] fruits = { "apple", "cherry", "pineapple", "plum" };
```

3. **or** we can make use of the `var` keyword, but in this case, we need to specify the `new[]` part.

```csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
```

::: tip Implicitly Typed Arrays
The third approach is called an **Implicitly Typed Array** because its type is inferred based on the assignment. 

They are great for **object initializers** and **anonymous** types.
:::

### Why do we still need `new[]`?

The second approach works because on the left side of the declaration we defined the type (in that case `string[]`). 

But if we use `var`, there is no way for the compiler to know what is the type of the initialization.

::: tip Choices
So, which one to use? 

I recommend using the **third** option because it uses the `var` keyword and it makes writing code faster. 

In addition, if you want to emphasize that those are indeed strings, you can specify that with `new string[]`:
:::

``` csharp
var fruits = new string[] { "apple", "cherry", "pineapple", "plum" };
```

It's up to you how much **clarity** you want to convey in your code. :blush:

Let's display the values with a `foreach` loop:

``` csharp
foreach(var fruit in fruits)
{
    Console.WriteLine(fruit);
}
```

## Conclusion

This is how you initialize arrays in C#. :star2: