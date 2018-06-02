# Expression-bodied functions

Let's declare a simple expression bodied function which doubles a number:

``` csharp
public static int Double(int number) 
    => number * number;
```

Notice the absence of:
- curly braces `{}`
- `return` keyword

And the presence of `=>` which is called the `fat arrow`.

We call it like any normal function:

``` csharp
var number = 5;
var result = Double(number);
Console.WriteLine(result); // 25
```

## Why using them?

They provide a **concise** way of writing functions which might not be the taste of all programmers.

Again, strive for readability and an easy understanding of your code. If these functions get too complicated, then reconsider their usage in that particular situation.

