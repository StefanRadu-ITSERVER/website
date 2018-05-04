---
title: Object initializer
---

## Object initializer

We can declare, assign and initialize the array at once. So, there is no need for us to write assignment on different lines. This is where the **object initializer** shines: 

<!-- ![Shining](https://media.giphy.com/media/3VSM58Eu7kR4A/giphy.gif) -->

``` csharp
string[] fruits = new string[4] { "apple", "cherry", "pineapple", "plum" };
```

We can also leave out the **size** if we want because the compiler is smart enough to infer (know) that. So, we can remove `4`:

```csharp
string[] fruits = new string[] { "apple", "cherry", "pineapple", "plum" };
```

## Approaches

Well, this intelligence of the compiler can lead us to other places as well :nerd_face:. Because the compiler can infer many things, we can simplify the way we create arrays:

1. we can leave out the type (in our case `string`):
```csharp
string[] fruits = new[] { "apple", "cherry", "pineapple", "plum" };
```

2. we can also leave out the `new[]` altoghether:
```csharp
string[] fruits = { "apple", "cherry", "pineapple", "plum" };
```

3. **or** we can make use of the `var` keyword. In this case, we need to specify the `new` keyword.

```csharp
var fruits = new[] { "apple", "cherry", "pineapple", "plum" };
```

::: tip Implicitly Typed Arrays
These arrays are called **Implicitly Typed Arrays** because their type is inferred based on the assignment. They are great for **object initializers** and **anonymous** types.
:::

The second approach works because on the left side of the declaration we defined the type (`string[]`). But if we use `var` there is no way for the compiler to know what is the type of the array initialization.

::: tip Choices
So, which one to use? I recommend using the **third** option because it makes use of the `var` keyword and it makes writing code faster. Still, if you want to tell that those are indeed strings, you can specify that with `new string[]`. It's up to you how much **clarity** you want to convey in your code. :blush:
:::

## Conclusion

Here I conclude my thoughts about creating arrays in C#. I will continue with methods and iteration. Also, I am going to switch to the `int` type, but remember any type can work with arrays: `string`, `int`, `char`, `Object` etc.