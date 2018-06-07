# Using Static Directives

From now on, you can include **static directives** by using the `static` keyword after `using`.

For example, `System.Console` exposes several static methods that we use for printing values to the console. 

By referencing it **statically**, we can omit the **name of the class** when calling its static method:

``` csharp
using static System.Console;
```

And we call it:

``` csharp
// Console.WriteLine("Hi, there!");
WriteLine("Hi, there!");
```

## Idea

This is the idea: you reference static classes with `static` to use their methods directly as if they were defined in this class.
